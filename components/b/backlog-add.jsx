import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jf69k_jbg {
  d: path("M18.5 9.5v-1a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9h3");
}

.jzv3w5x3l {
  d: path("M12.2 20.5H8.5v-11H21v5.7");
}

.ql75bjbyk {
  d: path("M15.5 6.5v-1a2 2 0 0 0-2-2h-9a2 2 0 0 0-2 2v9h3m6-1.5h3.7m2.8 2v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jzv3w5x3l"/><path class="jf69k_jbg"/><path class="ql75bjbyk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:backlog-add"} {...others} />);
}

export default Component;
