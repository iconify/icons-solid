import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxalz39nw {
  d: path("M12 2.5c6 0 7.5 7.5 7 10.5s-3.5 4.5-7 4.5S5.5 16 5 13S6 2.5 12 2.5Z");
}

.qb8dhxbza {
  d: path("M8 10a4 4.5 0 1 0 8 0a4 4.5 0 1 0-8 0Zm4 7.5v3m-3.5 0h7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dxalz39nw"/><path class="qb8dhxbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:egg-chair"} {...others} />);
}

export default Component;
