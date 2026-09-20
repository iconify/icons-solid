import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.ycisyduiq {
  fill: currentColor;
  d: path("M17.97 6.53a.75.75 0 0 1 1.06-1.06l5.75 5.75a.75.75 0 0 1 0 1.06l-5.75 5.75a.75.75 0 1 1-1.06-1.06l4.47-4.47h-8.69a9.25 9.25 0 0 0-9.25 9.25a.75.75 0 0 1-1.5 0C3 15.813 7.813 11 13.75 11h8.69z");
}
</style><path class="ycisyduiq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-forward-28-regular"} {...others} />);
}

export default Component;
