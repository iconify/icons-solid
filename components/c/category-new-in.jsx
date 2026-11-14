import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pdlpxzlgt {
  fill: currentColor;
  d: path("M12 6.25q.5 5.25 4 5.75q-3.5.5-4 5.75q-.5-5.25-4-5.75q3.5-.5 4-5.75Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v8htvnbph {
  d: path("m12 2l2.135 2.031L17 3.34l.834 2.826L20.66 7l-.691 2.865L22 12l-2.031 2.135L20.66 17l-2.826.834L17 20.66l-2.865-.691L12 22l-2.135-2.031L7 20.66l-.834-2.826L3.34 17l.691-2.865L2 12l2.031-2.135L3.34 7l2.826-.834L7 3.34l2.865.691Z");
}
</style><g class="ulnmmdpxh"><path class="v8htvnbph"/><path class="pdlpxzlgt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-new-in"} {...others} />);
}

export default Component;
