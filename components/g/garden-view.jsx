import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l9f-x9b6f {
  d: path("M4 3h16v16.5H4ZM2.5 19.5h19");
}

.qj98ee9vm {
  d: path("M8.5 11.5a2.5 2.5 0 0 1 .75-4.75a3 3 0 0 1 5.5 0a2.5 2.5 0 0 1 .75 4.75Zm3.5 0v8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l9f-x9b6f"/><path class="qj98ee9vm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:garden-view"} {...others} />);
}

export default Component;
