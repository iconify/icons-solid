import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k5erymbea {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm10.358 5.892q1.237 1.237 0 2.474l-3.568 3.568q-.481.482-1.149.615l-.439.088q-.709.142-1.22-.369t-.369-1.22l.088-.439q.133-.668.615-1.149l3.568-3.568q1.237-1.237 2.474 0");
}
</style><path class="k5erymbea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:folder-edit"} {...others} />);
}

export default Component;
