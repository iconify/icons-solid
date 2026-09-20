import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t-rb9-z-f {
  fill: currentColor;
  d: path("M12.77 18.116v-11H9V5.885h5v12.23z");
}
</style><path class="t-rb9-z-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:timer-1-outline"} {...others} />);
}

export default Component;
