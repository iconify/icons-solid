import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f7wo-0bvs {
  d: path("m12 11l-3.25 3.25A2.3 2.3 0 0 1 5.5 11a2.3 2.3 0 0 1 3.25-3.25Zm0 0l3.25-3.25A2.3 2.3 0 0 1 18.5 11a2.3 2.3 0 0 1-3.25 3.25Zm0 0q.5 6 3 9.5");
}

.q7ggq2bon {
  d: path("M12 11L8.75 7.75A2.3 2.3 0 0 1 12 4.5a2.3 2.3 0 0 1 3.25 3.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q7ggq2bon"/><path class="f7wo-0bvs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shamrock"} {...others} />);
}

export default Component;
