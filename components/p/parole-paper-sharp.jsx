import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccay6c4xt {
  d: path("M2.75 2.75h12.5v18.5H2.75zM6 7h5.5M6 10.25h4");
}

.vwo8dppqa {
  d: path("M12.5 14.25h-2a2.25 2.25 0 0 0 0 4.5h2m-.75-2.25h9.5m-2.75-2.75l2.75 2.75l-2.75 2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ccay6c4xt"/><path class="vwo8dppqa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:parole-paper-sharp"} {...others} />);
}

export default Component;
