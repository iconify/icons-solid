import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.oa1joyb2t {
  fill: currentColor;
  d: path("M10 2a.5.5 0 0 1 .5.5v3.043l1.896-1.897a.5.5 0 0 1 .708.708L10.5 6.957V9.5h2.543l2.603-2.604a.5.5 0 0 1 .708.708L14.457 9.5H17.5a.5.5 0 0 1 0 1h-3.043l1.897 1.896a.5.5 0 0 1-.708.708L13.043 10.5H10.5v2.543l2.604 2.603a.5.5 0 0 1-.708.708L10.5 14.457V17.5a.5.5 0 0 1-1 0v-3.043l-1.896 1.897a.5.5 0 0 1-.708-.708L9.5 13.043V10.5H6.957l-2.603 2.604a.5.5 0 0 1-.708-.708L5.543 10.5H2.5a.5.5 0 0 1 0-1h3.043L3.646 7.604a.5.5 0 1 1 .708-.708L6.957 9.5H9.5V6.957L6.896 4.354a.5.5 0 1 1 .708-.708L9.5 5.543V2.5A.5.5 0 0 1 10 2");
}
</style><path class="oa1joyb2t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:weather-snowflake-20-regular"} {...others} />);
}

export default Component;
