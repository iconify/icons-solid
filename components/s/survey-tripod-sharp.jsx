import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.udaywsbvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 9.5L4.5 21.25M12 9.5l7.5 11.75M12 9.5v11.75M8 7h8v2.5H8zm.75 0a3.25 3.25 0 0 1 6.5 0ZM12 3.75v-1");
}
</style><path class="udaywsbvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:survey-tripod-sharp"} {...others} />);
}

export default Component;
