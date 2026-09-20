import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bo_qddbub {
  fill: currentColor;
  d: path("M7 20v-2H6q-.425 0-.712-.288T5 17t.288-.712T6 16h1v-2H6q-.425 0-.712-.288T5 13t.288-.712T6 12h1V4q0-.425.288-.712T8 3h5.5q2.3 0 3.9 1.6T19 8.5t-1.6 3.9t-3.9 1.6H9v2h3q.425 0 .713.288T13 17t-.288.713T12 18H9v2q0 .425-.288.713T8 21t-.712-.288T7 20m2-8h4.5q1.45 0 2.475-1.025T17 8.5t-1.025-2.475T13.5 5H9z");
}
</style><path class="bo_qddbub"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:currency-ruble-outline-rounded"} {...others} />);
}

export default Component;
