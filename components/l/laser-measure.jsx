import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gzn71byzt {
  d: path("M2.5 7H11v13H2.5Zm19-3v14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xoum9jbqd {
  d: path("M4.5 9.5H9V13H4.5Zm2.25 7h.01M13 11h2m2 0h2");
}
</style><g class="ulnmmdpxh"><path class="gzn71byzt"/><path class="xoum9jbqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:laser-measure"} {...others} />);
}

export default Component;
