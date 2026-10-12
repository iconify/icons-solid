import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gz6olcczg {
  d: path("M4.5 20.25V15H9v5.25M6.75 15V7.75H17V12m-5.25-4.25v-4.5");
}

.hak_f-7gb {
  d: path("M14.5 20.25V12h5v8.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gz6olcczg"/><path class="hak_f-7gb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:dendrogram-sharp"} {...others} />);
}

export default Component;
