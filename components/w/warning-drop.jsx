import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cd6ks4xal {
  d: path("m12 2.75l9.75 17.75H2.25ZM12 9v7.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqppunb1q {
  d: path("m9.5 13.75l2.5 2.5l2.5-2.5");
}
</style><g class="ulnmmdpxh"><path class="cd6ks4xal"/><path class="yqppunb1q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:warning-drop"} {...others} />);
}

export default Component;
