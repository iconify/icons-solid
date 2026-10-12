import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ewq9xjqsn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.25h12.5v13H5.75zm3.5 0v-3.5h5.5v3.5M9.5 9.75v6m5-6v6m-5.75 3.5v2m6.5-2v2");
}
</style><path class="ewq9xjqsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:luggage-clock-sharp"} {...others} />);
}

export default Component;
