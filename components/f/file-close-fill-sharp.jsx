import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmdh4pg1r {
  fill: currentColor;
  d: path("M13 2c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 7h5l-5-5Zm.414 6l1.293-1.293a.999.999 0 1 0-1.414-1.414L12 13.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414L10.586 15l-1.293 1.293a.999.999 0 1 0 1.414 1.414L12 16.414l1.293 1.293a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="nmdh4pg1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-close-fill-sharp"} {...others} />);
}

export default Component;
