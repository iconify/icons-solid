import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.x7jyp0bqd {
  fill: currentColor;
  d: path("M240 200h-8v-56a16 16 0 0 0-16-16h-40V56a16 16 0 0 0-16-16H96a16 16 0 0 0-16 16v32H40a16 16 0 0 0-16 16v96h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16m-160 0H40v-96h40Zm60-64a8 8 0 0 1-16 0v-28.9l-1.47.49a8 8 0 0 1-5.06-15.18l12-4A8 8 0 0 1 140 96Zm76 64h-40v-56h40Z");
}
</style><path class="x7jyp0bqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ranking-fill"} {...others} />);
}

export default Component;
