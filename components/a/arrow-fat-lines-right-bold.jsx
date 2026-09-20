import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.rzclk60yx {
  fill: currentColor;
  d: path("m240.49 119.51l-96-96A12 12 0 0 0 124 32v36h-4a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12h4v36a12 12 0 0 0 20.49 8.49l96-96a12 12 0 0 0 0-16.98M148 195v-19a12 12 0 0 0-12-12h-4V92h4a12 12 0 0 0 12-12V61l67 67ZM52 80v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0m40 0v96a12 12 0 0 1-24 0V80a12 12 0 0 1 24 0");
}
</style><path class="rzclk60yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-lines-right-bold"} {...others} />);
}

export default Component;
