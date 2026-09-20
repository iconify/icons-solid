import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqadmrb5r {
  fill: currentColor;
  d: path("M15.5 19.462V17.5h-2.384q-.672 0-1.144-.472t-.472-1.143V7.5h-3v1.962q0 .44-.299.739t-.74.299H3.539q-.44 0-.739-.299t-.299-.74V4.54q0-.441.299-.74t.74-.299h3.923q.44 0 .739.299t.299.74V6.5h7V4.539q0-.441.299-.74t.74-.299h3.922q.441 0 .74.299t.299.74v4.923q0 .44-.299.739t-.74.299H16.54q-.441 0-.74-.299t-.299-.74V7.5h-3v8.385q0 .269.173.442t.443.173H15.5v-1.961q0-.441.299-.74t.74-.299h3.922q.441 0 .74.299t.299.74v4.922q0 .441-.299.74t-.74.299H16.54q-.441 0-.74-.299t-.299-.74");
}
</style><path class="kqadmrb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:account-tree-rounded"} {...others} />);
}

export default Component;
