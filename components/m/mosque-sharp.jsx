import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.stcy8v3ox {
  d: path("M10.75 21.25v-3.5h2.5v3.5");
}

.vi6216k3z {
  d: path("M2.75 21.25V7.5L4 4.5l1.25 3v13.75Zm16 0V7.5l1.25-3l1.25 3v13.75Zm-10.5 0V13.5H9.5c0-3 2.5-4.25 2.5-7.5c0 3.25 2.5 4.5 2.5 7.5h1.25v7.75ZM12 6V3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="vi6216k3z"/><path class="stcy8v3ox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mosque-sharp"} {...others} />);
}

export default Component;
