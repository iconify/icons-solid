import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bby_ajj6p {
  d: path("M12 21v-9L5 5m7 7l7-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zyas4xbks {
  d: path("M5 9V5h4m6 0h4v4");
}
</style><g class="ulnmmdpxh"><path class="bby_ajj6p"/><path class="zyas4xbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hard-fork"} {...others} />);
}

export default Component;
