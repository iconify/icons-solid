import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u6fszbrdl {
  fill: currentColor;
  d: path("M205.66 138.34A8 8 0 0 1 200 152h-64v72a8 8 0 0 1-16 0v-72H56a8 8 0 0 1-5.66-13.66l72-72a8 8 0 0 1 11.32 0ZM216 32H40a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16");
}
</style><path class="u6fszbrdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-up-fill"} {...others} />);
}

export default Component;
