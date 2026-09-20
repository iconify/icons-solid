import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rk_i_dbao {
  fill: currentColor;
  d: path("M3.077 17V8.692q0-.666.475-1.14t1.14-.475h14.616q.666 0 1.14.474t.475 1.141V17q0 .213-.144.356q-.144.144-.356.144q-.213 0-.357-.144T19.923 17v-1.5h-4.711V17q0 .213-.144.356q-.144.144-.357.144t-.356-.144t-.143-.356V8.077h-9.52q-.269 0-.442.173t-.173.442V17q0 .213-.144.356t-.357.144t-.356-.144T3.077 17m12.135-6.5h4.711V8.692q0-.269-.173-.442t-.442-.173h-4.096zm0 4h4.711v-3h-4.711z");
}
</style><path class="rk_i_dbao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:desk-rounded"} {...others} />);
}

export default Component;
