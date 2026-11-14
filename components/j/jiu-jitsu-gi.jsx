import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ico8z6q-w {
  d: path("m9.051 12.612l2.898.776l-1.812 6.762l-2.898-.777Zm3 .776l2.898-.776l1.812 6.761l-2.898.777Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpvcxsbsf {
  d: path("M9 7H2.5v4H9m6-4h6.5v4H15M9 5h6v8H9Z");
}
</style><g class="ulnmmdpxh"><path class="xpvcxsbsf"/><path class="ico8z6q-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:jiu-jitsu-gi"} {...others} />);
}

export default Component;
