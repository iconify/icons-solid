import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.htbvunzrj {
  fill: currentColor;
  d: path("m16.36 7.58l-.86 9.41H17l3.16-7.89zM3.84 9.1L7 16.99h1.5l-.86-9.41zM10 16.99h4L15 6H9zm10.32-4.24l-1.81 4.5l1.95.96l2.06-1.22zM1.48 16.99l2.06 1.22l1.95-.96l-1.81-4.5z");
}
</style><path class="htbvunzrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-bakery-dining"} {...others} />);
}

export default Component;
