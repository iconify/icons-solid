import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.s5qtmybay {
  fill: currentColor;
  d: path("M16 2c7.732 0 14 6.268 14 14s-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2m6.707 12.707a1 1 0 0 0-1.414-1.414L16 18.586l-5.293-5.293a1 1 0 0 0-1.414 1.414l5.878 5.879l.033.028q.04.035.08.073a1 1 0 0 0 .716.293c.26.003.484-.097.718-.293c.05-.041.06-.05.11-.1v-.002z");
}
</style><path class="s5qtmybay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:chevron-circle-down-32-filled"} {...others} />);
}

export default Component;
