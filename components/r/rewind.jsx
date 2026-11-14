import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqxkgcbsr {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.4 7.158q-1.35-.699-2.591.177l-3.716 2.622q-1.059.747-1.059 2.043t1.059 2.043l3.716 2.622q1.241.876 2.591.177q1.349-.699 1.35-2.219V9.377q-.001-1.52-1.35-2.219m-12.091.177q1.241-.876 2.591-.177q1.349.699 1.35 2.219v5.246q-.001 1.52-1.35 2.219t-2.591-.177l-3.716-2.622Q3.534 13.296 3.534 12t1.059-2.043z");
}
</style><path class="fqxkgcbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:rewind"} {...others} />);
}

export default Component;
