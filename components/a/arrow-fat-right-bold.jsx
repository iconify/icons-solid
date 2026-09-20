import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.jf139acro {
  fill: currentColor;
  d: path("m240.49 119.51l-96-96A12 12 0 0 0 124 32v36H48a20 20 0 0 0-20 20v80a20 20 0 0 0 20 20h76v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12H52V92h84a12 12 0 0 0 12-12V61l67 67Z");
}
</style><path class="jf139acro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-right-bold"} {...others} />);
}

export default Component;
