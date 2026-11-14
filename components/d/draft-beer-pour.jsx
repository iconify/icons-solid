import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.czfg-7bil {
  d: path("M4 3h7.5a2 2 0 0 1 2 2v3.75M8 9l1 12h9l1-12");
}

.lb7lqnp0y {
  d: path("M8.25 12q2.625-2.25 5.25 0t5.25 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="czfg-7bil"/><path class="lb7lqnp0y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:draft-beer-pour"} {...others} />);
}

export default Component;
