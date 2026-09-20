import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xevf-bbet {
  fill: currentColor;
  d: path("M4.5 14.385v-1h15v1zm0 3.769v-1h15v1zm0-7.538v-1h15v1zm0-3.77v-1h15v1z");
}
</style><path class="xevf-bbet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-headline"} {...others} />);
}

export default Component;
