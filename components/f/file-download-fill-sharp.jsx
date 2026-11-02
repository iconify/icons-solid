import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgybrgblp {
  fill: currentColor;
  d: path("M13 2c.265 0 .52.105.707.293l6 6A1 1 0 0 1 20 9v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm0 7h5l-5-5Zm-1.707 9.707a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 15.586V12a1 1 0 0 0-2 0v3.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414Z");
}
</style><path class="lgybrgblp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-download-fill-sharp"} {...others} />);
}

export default Component;
