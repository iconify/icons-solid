import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mlvq5ob8e {
  fill: currentColor;
  d: path("M12 4v16a1.002 1.002 0 0 1-1.707.707L6.586 17H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3.586l3.707-3.707A1 1 0 0 1 12 4m6 6.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L19.414 12l2.293 2.293a.999.999 0 1 1-1.414 1.414L18 13.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414L16.586 12l-2.293-2.293a.999.999 0 1 1 1.414-1.414Z");
}
</style><path class="mlvq5ob8e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:volume-close-fill-sharp"} {...others} />);
}

export default Component;
