import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eu6p8nb1i {
  fill: currentColor;
  d: path("M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h6.022a6.5 6.5 0 0 1-.709-1.5H6A1.5 1.5 0 0 1 4.5 18V8.5h15v2.813a6.5 6.5 0 0 1 1.5.709zM6 4.5h12A1.5 1.5 0 0 1 19.5 6v1h-15V6A1.5 1.5 0 0 1 6 4.5m17 13a5.5 5.5 0 1 0-11 0a5.5 5.5 0 0 0 11 0m-5.354-2.146a.5.5 0 0 1 .708-.708l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L19.293 18H14.5a.5.5 0 0 1 0-1h4.793z");
}
</style><path class="eu6p8nb1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-arrow-right-24-regular"} {...others} />);
}

export default Component;
