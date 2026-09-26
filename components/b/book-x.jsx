import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.okkrs1paw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 12L20 5C20 3.3431 18.6569 2 17 2L7 2C5.3431 2 4 3.3431 4 5L4 20M10 22L6 22C4.8954 22 4 21.1046 4 20C4 18.8954 4.8954 18 6 18L10 18M8 6L8 14M14 16L20 22M20 16L14 22");
}
</style><path class="okkrs1paw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:book-x"} {...others} />);
}

export default Component;
