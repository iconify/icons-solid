import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r5ubqxbim {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5m-13.75 0V6m9-2.25V6m-10 .25h3l.11.99l1.28 11.27l.11.99H4l.11-.99L5.39 7.24l.11-.99zm8.75 0h3.5l.52.85l.96 1.55l.52.85l-.75.38l-.75.37v9.25h-5.5v-9.25L13 9.88l-.75-.38l.52-.85l.96-1.55l.52-.85z");
}
</style><path class="r5ubqxbim"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:closet-sharp"} {...others} />);
}

export default Component;
