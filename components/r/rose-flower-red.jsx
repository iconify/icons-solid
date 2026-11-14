import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-mdzjmbh {
  d: path("M6 8c0-3.5 3-5.5 6-3.5c3-2 6 0 6 3.5A6 6 0 0 1 6 8Zm6 6v7.5");
}

.uksmxxbok {
  d: path("M14 9.25a2 2 0 1 1-2-2m0 11.25c0-2.5 2-3.5 5-3.5c0 2.5-2 3.5-5 3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n-mdzjmbh"/><path class="uksmxxbok"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rose-flower-red"} {...others} />);
}

export default Component;
