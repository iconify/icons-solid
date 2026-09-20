import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kber07-3s {
  fill: currentColor;
  d: path("M236 200a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-14-75.46l-94 54.83l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l96-56a4 4 0 1 0-4-6.92M28 80a4 4 0 0 1 2-3.46l96-56a4 4 0 0 1 4 0l96 56a4 4 0 0 1 0 6.92l-96 56a4 4 0 0 1-4 0l-96-56A4 4 0 0 1 28 80m11.94 0L128 131.37L216.06 80L128 28.63ZM142 219.21l-14 8.16l-94-54.83a4 4 0 0 0-4 6.92l96 56a4 4 0 0 0 4 0l16-9.34a4 4 0 1 0-4-6.91");
}
</style><path class="kber07-3s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stack-minus-thin"} {...others} />);
}

export default Component;
