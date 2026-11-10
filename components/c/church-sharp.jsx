import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tcn8x-b_z {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 22V14M6 22H2V16L6 14M6 22H10M6 14V12L12 7.61M10 22V18C10 16.9 10.895 16 12 16C13.105 16 14 16.9 14 18V22M10 22H14M12 7.61L18 12V14M12 7.61V4M14 22H18M18 14V22M18 14L22 16V22H18M12 4V1M12 4H9M12 4H15");
}
</style><path class="tcn8x-b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:church-sharp"} {...others} />);
}

export default Component;
