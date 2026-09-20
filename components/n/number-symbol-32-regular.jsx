import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ntig42s1r {
  fill: currentColor;
  d: path("M14.98 3.196a1 1 0 0 0-1.96-.392L11.58 10H5a1 1 0 1 0 0 2h6.18l-1.4 7H4a1 1 0 1 0 0 2h5.38l-1.36 6.804a1 1 0 0 0 1.96.392L11.42 21h6.96l-1.36 6.804a1 1 0 0 0 1.96.392L20.42 21H27a1 1 0 1 0 0-2h-6.18l1.4-7H28a1 1 0 1 0 0-2h-5.38l1.36-6.804a1 1 0 0 0-1.96-.392L20.58 10h-6.96zM18.78 19h-6.96l1.4-7h6.96z");
}
</style><path class="ntig42s1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:number-symbol-32-regular"} {...others} />);
}

export default Component;
