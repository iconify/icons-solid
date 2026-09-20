import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xf3v7-bdb {
  fill: currentColor;
  d: path("M3.5 18.885v-4h2V7q0-1.458 1.021-2.479T9 3.5t2.479 1.021T12.5 7v10q0 1.056.722 1.778T15 19.5t1.778-.722T17.5 17V9.116h-2v-4h1V3.5h3v1.616h1v4h-2V17q0 1.458-1.021 2.479T15 20.5t-2.479-1.021T11.5 17V7q0-1.056-.722-1.778T9 4.5t-1.778.722T6.5 7v7.885h2v4h-1V20.5h-3v-1.616z");
}
</style><path class="xf3v7-bdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:cable-outline-sharp"} {...others} />);
}

export default Component;
