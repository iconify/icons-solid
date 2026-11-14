import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rvf7g4bga {
  d: path("m15.808 6.618l-1.215 6.893l-10.833-1.91l1.216-6.894Z");
}

.ujfmn8ail {
  d: path("M11.754 9.457a3.5 3.5 0 0 1 6.893 1.215m.103 4.828h.01m-3.01 3h.01m3.74 1.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rvf7g4bga"/><path class="ujfmn8ail"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sumo-salt-throw"} {...others} />);
}

export default Component;
