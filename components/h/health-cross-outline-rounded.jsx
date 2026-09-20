import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g-3_n1c0v {
  fill: currentColor;
  d: path("M9 21q-.425 0-.712-.288T8 20v-4H4q-.425 0-.712-.288T3 15V9q0-.425.288-.712T4 8h4V4q0-.425.288-.712T9 3h6q.425 0 .713.288T16 4v4h4q.425 0 .713.288T21 9v6q0 .425-.288.713T20 16h-4v4q0 .425-.288.713T15 21zm1-2h4v-5h5v-4h-5V5h-4v5H5v4h5zm2-7");
}
</style><path class="g-3_n1c0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-cross-outline-rounded"} {...others} />);
}

export default Component;
