import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u0qwczb6w {
  fill: currentColor;
  d: path("M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16m-16 136a8 8 0 0 1 0 16H56a8 8 0 0 1-8-8V72a8 8 0 0 1 16 0v62.92l34.88-29.07a8 8 0 0 1 9.56-.51l43 28.69l43.41-36.18a8 8 0 0 1 10.24 12.3l-48 40a8 8 0 0 1-9.56.51l-43-28.69L64 155.75V176Z");
}
</style><path class="u0qwczb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chart-line-fill"} {...others} />);
}

export default Component;
