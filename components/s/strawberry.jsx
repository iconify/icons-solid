import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c-x9em5xt {
  d: path("M12 7.5c-5-1-7.5 2-6.5 5.5s4.5 7.5 6.5 8c2-.5 5.5-4.5 6.5-8S17 6.5 12 7.5Z");
}

.t_96fdq-n {
  d: path("m9 5l3 2.5L15 5m-5 7h.01M14 12h.01M12 16h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c-x9em5xt"/><path class="t_96fdq-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:strawberry"} {...others} />);
}

export default Component;
