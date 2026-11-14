import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax80robco {
  fill: currentColor;
  d: path("M8 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm5-3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ye27u3bok {
  d: path("M8 16.5A4 4 0 0 1 6.5 9a5.5 5.5 0 0 1 11 0a4 4 0 0 1-1.5 7.5Zm4 0v5");
}
</style><g class="ulnmmdpxh"><path class="ye27u3bok"/><path class="ax80robco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:peach-tree"} {...others} />);
}

export default Component;
