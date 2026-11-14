import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7snhjbfx {
  d: path("m9.5 15l2.5 2.5l2.5-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj0pkaczv {
  d: path("M3 4h18v4.5H3Zm1.5 4.5v10a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-10M12 11.25v6.25");
}
</style><g class="ulnmmdpxh"><path class="xj0pkaczv"/><path class="t7snhjbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:project-archive"} {...others} />);
}

export default Component;
