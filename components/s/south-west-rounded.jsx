import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miisll_2r {
  fill: currentColor;
  d: path("M6.308 18.5q-.348 0-.578-.23t-.23-.578V10q0-.213.143-.357T6 9.5t.357.143T6.5 10v6.792L18.246 5.046q.16-.16.354-.16t.354.16t.16.354t-.16.354L7.208 17.5H14q.214 0 .357.143T14.5 18t-.143.357T14 18.5z");
}
</style><path class="miisll_2r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:south-west-rounded"} {...others} />);
}

export default Component;
