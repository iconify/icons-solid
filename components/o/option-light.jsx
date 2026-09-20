import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i0oomndeo {
  fill: currentColor;
  d: path("M230 192a6 6 0 0 1-6 6h-63.06a13.92 13.92 0 0 1-12.52-7.74L96.84 87.11A2 2 0 0 0 95.06 86H32a6 6 0 0 1 0-12h63.06a13.92 13.92 0 0 1 12.52 7.74l51.58 103.15a2 2 0 0 0 1.78 1.11H224a6 6 0 0 1 6 6M152 86h72a6 6 0 0 0 0-12h-72a6 6 0 0 0 0 12");
}
</style><path class="i0oomndeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:option-light"} {...others} />);
}

export default Component;
