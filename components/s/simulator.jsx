import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ajj8zo-dc {
  d: path("M15.5 9h6v12.5h-6Z");
}

.nbe1sbbrx {
  d: path("M12.7 15.5H2.5v-12h16v2.7m-9 9.3v4m-3.5 0h6.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nbe1sbbrx"/><path class="ajj8zo-dc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:simulator"} {...others} />);
}

export default Component;
