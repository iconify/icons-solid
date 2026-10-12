import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cgzof0bky {
  d: path("M2.75 3.25h18.5v12.5H2.75z");
}

.q_7jgbb8k {
  d: path("M6.5 8V7h1m10 1V7h-1m-10 4v1h1m10-1v1h-1M12 15.75v2.5m-3.75 0h7.5v3h-7.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="cgzof0bky"/><path class="q_7jgbb8k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:field-monitor-sharp"} {...others} />);
}

export default Component;
