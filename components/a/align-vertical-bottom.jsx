import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2-u9hb8i {
  fill: currentColor;
  d: path("M2 22v-2h20v2zm5-4V2h3v16zm7 0V8h3v10z");
}
</style><path class="v2-u9hb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:align-vertical-bottom"} {...others} />);
}

export default Component;
