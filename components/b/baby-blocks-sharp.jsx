import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hkdq4jb_w {
  d: path("m13.1 3.35l6.05 3.3l1.1.6v9.5l-1.1.6l-6.05 3.3l-1.1.6l-1.1-.6l-6.05-3.3l-1.1-.6v-9.5l1.1-.6l6.05-3.3l1.1-.6z");
}

.j7p69yblv {
  d: path("m3.75 7.25l8.25 4.5l8.25-4.5M12 11.75v9.5m-6-4l1.9-4.75l1.85 5.75m-3-2.75h2.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="hkdq4jb_w"/><path class="j7p69yblv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baby-blocks-sharp"} {...others} />);
}

export default Component;
