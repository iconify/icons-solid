import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yji_nl90z {
  fill: currentColor;
  d: path("M11 19v-4.1q-2.15-.35-3.575-2T6 9V4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4v5q0 2.25-1.425 3.9T13 14.9V19h2q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zM8 8h8V5H8z");
}
</style><path class="yji_nl90z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wine-bar-rounded"} {...others} />);
}

export default Component;
