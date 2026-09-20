import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mkuxsmbtn {
  fill: currentColor;
  d: path("M13 18V9H4V8h10v10zm4-3.98v-9H8v-1h10v10z");
}
</style><path class="mkuxsmbtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:arrows-more-up-outline"} {...others} />);
}

export default Component;
