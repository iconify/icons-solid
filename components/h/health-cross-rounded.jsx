import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q5ylerb7f {
  fill: currentColor;
  d: path("M9 21q-.425 0-.712-.288T8 20v-4H4q-.425 0-.712-.288T3 15V9q0-.425.288-.712T4 8h4V4q0-.425.288-.712T9 3h6q.425 0 .713.288T16 4v4h4q.425 0 .713.288T21 9v6q0 .425-.288.713T20 16h-4v4q0 .425-.288.713T15 21z");
}
</style><path class="q5ylerb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:health-cross-rounded"} {...others} />);
}

export default Component;
