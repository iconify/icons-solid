import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w6tbwxblk {
  fill: currentColor;
  d: path("M1.5 18.77q-.213 0-.357-.144T1 18.269t.143-.356t.357-.144h3.116V17q-.691 0-1.153-.462T3 15.385v-8.77q0-.69.463-1.152T4.615 5h14.77q.69 0 1.152.463T21 6.615v8.77q0 .69-.463 1.153T19.385 17v.77H22.5q.214 0 .357.143t.143.356t-.143.357t-.357.143z");
}
</style><path class="w6tbwxblk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:laptop-windows-rounded"} {...others} />);
}

export default Component;
