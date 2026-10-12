import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yx855t-jn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m20.02 6.61l-6.54 4.53l-1.23.86l1.23.86l6.54 4.53l1.23.86V5.75zm-9.5 0l-6.54 4.53l-1.23.86l1.23.86l6.54 4.53l1.23.86V5.75z");
}
</style><path class="yx855t-jn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rewind-sharp"} {...others} />);
}

export default Component;
