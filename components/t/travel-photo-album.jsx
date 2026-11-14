import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mc_y8rbqp {
  d: path("M13.5 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM4 17l5-5l4 4l2.5-2l4.5 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y-ptnzbaj {
  d: path("M4 4.5h16v15H4Z");
}
</style><g class="ulnmmdpxh"><path class="y-ptnzbaj"/><path class="mc_y8rbqp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:travel-photo-album"} {...others} />);
}

export default Component;
