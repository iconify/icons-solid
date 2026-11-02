import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wt3ij9b8d {
  fill: currentColor;
  d: path("M3 4h10a1 1 0 0 1 0 2H9v13a1 1 0 0 1-2 0V6H3a1 1 0 0 1 0-2m12.707 8.293L18 14.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L19.414 16l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 17.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L16.586 16l-2.293-2.293a.999.999 0 1 1 1.414-1.414");
}
</style><path class="wt3ij9b8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:remove-formatting-fill-round"} {...others} />);
}

export default Component;
