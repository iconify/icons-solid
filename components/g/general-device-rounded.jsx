import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ay1xvbcfq {
  fill: currentColor;
  d: path("M9 18q-.425 0-.712-.288T8 17V5q0-.825.588-1.412T10 3h4q.825 0 1.413.588T16 5v12q0 .425-.288.713T15 18zm0 1h6q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19");
}
</style><path class="ay1xvbcfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:general-device-rounded"} {...others} />);
}

export default Component;
