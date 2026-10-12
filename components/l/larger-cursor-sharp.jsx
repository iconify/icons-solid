import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rw2574bwz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.45 3.14l12.1 6.72l.7.39l-.77.22l-4.71 1.31L12 12l-.31.74l-2.13 5.02l-.31.74l-.22-.77L4.97 3.52l-.22-.77zm9.8 12.11l6 6m0-4v4h-4");
}
</style><path class="rw2574bwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:larger-cursor-sharp"} {...others} />);
}

export default Component;
