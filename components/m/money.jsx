import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6oj6vztu {
  fill: currentColor;
  d: path("M14.77 15.5h2.96q.213 0 .357-.144t.144-.356V9q0-.213-.144-.356t-.356-.144h-2.962q-.212 0-.356.144T14.269 9v6q0 .213.144.356t.356.144m.5-1v-5h1.962v5zm-6.23 1H12q.213 0 .356-.144T12.5 15V9q0-.213-.144-.356T12 8.5H9.039q-.213 0-.357.144T8.54 9v6q0 .213.143.356t.357.144m.5-1v-5h1.96v5zm-3.77 1h1v-7h-1zM3 19V5h18v14z");
}
</style><path class="p6oj6vztu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:money"} {...others} />);
}

export default Component;
