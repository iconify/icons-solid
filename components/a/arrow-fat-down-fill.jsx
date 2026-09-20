import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.n4cv5cc9t {
  fill: currentColor;
  d: path("m229.66 141.66l-96 96a8 8 0 0 1-11.32 0l-96-96A8 8 0 0 1 32 128h40V48a16 16 0 0 1 16-16h80a16 16 0 0 1 16 16v80h40a8 8 0 0 1 5.66 13.66");
}
</style><path class="n4cv5cc9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-down-fill"} {...others} />);
}

export default Component;
