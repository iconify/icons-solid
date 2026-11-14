import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mcxc2nbpe {
  d: path("M6.75 16.25a5.25 5.25 0 1 0 10.5 0a5.25 5.25 0 1 0-10.5 0Z");
}

.odh191pzi {
  d: path("m9.5 11.5l4-7c.75-1.25-.25-2.25-1.5-2.25s-2.25 1-1.5 2.25l4 7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn19_qipc {
  fill: currentColor;
  d: path("m12 13.75l.882 1.286l1.496.441l-.951 1.237l.042 1.559L12 17.75l-1.469.523l.042-1.559l-.951-1.237l1.496-.441Z");
}
</style><g class="ulnmmdpxh"><path class="mcxc2nbpe"/><path class="odh191pzi"/><path class="yn19_qipc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:survivor"} {...others} />);
}

export default Component;
