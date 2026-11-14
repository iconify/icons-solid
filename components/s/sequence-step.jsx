import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rya-3zbug {
  fill: currentColor;
  d: path("M16.5 16.5h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yxgzh2blp {
  d: path("M2.5 2.5h5v5h-5Zm7 7h5v5h-5Z");
}
</style><g class="ulnmmdpxh"><path class="yxgzh2blp"/><path class="rya-3zbug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sequence-step"} {...others} />);
}

export default Component;
