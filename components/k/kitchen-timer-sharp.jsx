import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gi-pb_cmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75c4 0 7.25 6.25 7.25 11a7.25 7.25 0 0 1-14.5 0C4.75 9 8 2.75 12 2.75Zm-7.25 11h14.5M12 7.25v3m-3.5 6.5v1m3.5-1v1.5m3.5-1.5v1");
}
</style><path class="gi-pb_cmt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kitchen-timer-sharp"} {...others} />);
}

export default Component;
