import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hbpgc4b1h {
  fill: currentColor;
  d: path("M17.5 3.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.758a4.5 4.5 0 1 0 2 3.742a.5.5 0 0 0-1 0a3.5 3.5 0 1 1-1.696-3H15.5a.5.5 0 0 0 0 1zM16 10.773a5.5 5.5 0 0 1-1 .185V15H5V4a1 1 0 0 1 1-1h3.59c.18-.358.4-.693.651-1H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1z");
}
</style><path class="hbpgc4b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:book-arrow-clockwise-20-regular"} {...others} />);
}

export default Component;
