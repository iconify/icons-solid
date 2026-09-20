import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lsrj0jbtm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M15 8h-3.055l1.974-4.606A1 1 0 0 0 13 2H8a1 1 0 0 0-.92.606l-3 7A1 1 0 0 0 5 11h1.734l-2.662 6.627c-.4.995.835 1.836 1.614 1.1l5.024-4.742l4.94-4.225C16.356 9.156 15.93 8 15 8m-5.49.606A1 1 0 0 0 10.428 10h1.864l-2.92 2.498l-1.748 1.65l1.517-3.775A1 1 0 0 0 8.214 9H6.517l2.142-5h2.824z");
}
</style><path clip-rule="evenodd" class="lsrj0jbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:electricity"} {...others} />);
}

export default Component;
