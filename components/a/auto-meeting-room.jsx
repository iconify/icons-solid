import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrmq_rpyu {
  fill: currentColor;
  d: path("M1 21v-2h2V3h10v1h4v8h-2V6h-2v15H1Zm8-8q.425 0 .713-.288T10 12q0-.425-.288-.713T9 11q-.425 0-.713.288T8 12q0 .425.288.713T9 13Zm10 9l1.25-2.75L23 18l-2.75-1.25L19 14l-1.25 2.75L15 18l2.75 1.25L19 22Z");
}
</style><path class="hrmq_rpyu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-meeting-room"} {...others} />);
}

export default Component;
