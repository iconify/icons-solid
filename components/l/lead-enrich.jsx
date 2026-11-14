import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gyme5tbel {
  d: path("M6.5 9.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM5 19.5V18a3.5 3.5 0 0 1 7 0v1.5m3-9.5h3.5m-.5 5v6m-3-3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsq59ibye {
  d: path("M12.2 19.5H2.5v-15h19v10.7");
}
</style><g class="ulnmmdpxh"><path class="wsq59ibye"/><path class="gyme5tbel"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lead-enrich"} {...others} />);
}

export default Component;
