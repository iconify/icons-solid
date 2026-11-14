import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bg6xnqb5s {
  d: path("M12 15q-1.5 2 0 3.75M12 15q2.75 0 3.25-1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yikobgb6k {
  d: path("M8.25 15a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.zoec20bqj {
  d: path("M3 4h18v17.5H3Zm0 4.25h18M8 2.5v3m8-3v3");
}
</style><g class="ulnmmdpxh"><path class="zoec20bqj"/><path class="yikobgb6k"/><path class="bg6xnqb5s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:volleyball-calendar"} {...others} />);
}

export default Component;
