import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q_9x6f_pv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 17.75a6.5 2.75 0 1 0 13 0a6.5 2.75 0 1 0-13 0ZM2.82 19.7l.11-1.15l.07-.8l.51-.61l.23-.28l.51-.61l.62.5h.01l.62.5l.06.8l.13 1.65l.06.8h-3zm8.93-7.7l-1.5-1.5l1.5-1.5l1.5-1.5l-1.5-1.5m3 6l-1.5-1.5l1.5-1.5l1.5-1.5l-1.5-1.5c-1-1 1-2 0-3m3 9l-1.5-1.5l1.5-1.5l1.5-1.5l-1.5-1.5");
}
</style><path class="q_9x6f_pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hot-spring-sharp"} {...others} />);
}

export default Component;
