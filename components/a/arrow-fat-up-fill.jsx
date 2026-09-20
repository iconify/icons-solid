import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i1qpvorfr {
  fill: currentColor;
  d: path("M231.39 123.06A8 8 0 0 1 224 128h-40v80a16 16 0 0 1-16 16H88a16 16 0 0 1-16-16v-80H32a8 8 0 0 1-5.66-13.66l96-96a8 8 0 0 1 11.32 0l96 96a8 8 0 0 1 1.73 8.72");
}
</style><path class="i1qpvorfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-fat-up-fill"} {...others} />);
}

export default Component;
