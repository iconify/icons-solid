import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.msdpiacfb {
  fill: currentColor;
  d: path("m236.86 131.51l-52 72a6 6 0 0 1-9.72 0L76 66.25l-47.14 65.26a6 6 0 1 1-9.72-7l52-72a6 6 0 0 1 9.72 0L180 189.75l47.14-65.26a6 6 0 0 1 9.72 7Z");
}
</style><path class="msdpiacfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wave-triangle-light"} {...others} />);
}

export default Component;
