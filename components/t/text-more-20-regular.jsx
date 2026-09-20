import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hz86g-v_s {
  fill: currentColor;
  d: path("M8 2a.5.5 0 0 1 .463.311L13.56 14.82a2.26 2.26 0 0 0-1.083-.009L11.331 12H4.67l-1.707 4.189a.5.5 0 1 1-.926-.378l5.5-13.5A.5.5 0 0 1 8 2m5 13.75A1.246 1.246 0 0 1 14.25 17A1.25 1.25 0 1 1 13 15.75M5.077 11h5.846L8 3.825zm5.173 6a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M17 18.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5");
}
</style><path class="hz86g-v_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-more-20-regular"} {...others} />);
}

export default Component;
