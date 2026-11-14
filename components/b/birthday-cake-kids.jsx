import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ds-dpwb5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 12h17v9.5h-17ZM7 12V7.75M12 12V7.75M17 12V7.75M7 3c1.75 2 1.5 4.75 0 4.75S5.25 5 7 3Zm5 0c1.75 2 1.5 4.75 0 4.75S10.25 5 12 3Zm5 0c1.75 2 1.5 4.75 0 4.75S15.25 5 17 3Z");
}
</style><path class="ds-dpwb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:birthday-cake-kids"} {...others} />);
}

export default Component;
