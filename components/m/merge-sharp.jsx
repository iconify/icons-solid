import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qox40m97p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 2V10.648M15.293 5.293L12 2L8.707 5.293M12 10.648C12 14.707 13.671 18.497 16.453 20.748L18 22L18.293 22.293M12 10.648C12 14.707 10.329 18.497 7.547 20.748L6 22L5.707 22.293");
}
</style><path class="qox40m97p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:merge-sharp"} {...others} />);
}

export default Component;
