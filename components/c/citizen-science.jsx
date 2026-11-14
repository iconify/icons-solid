import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x5i0rq_ph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.196 21H5c-.6 0-1-.4-1-1c0-3.3 3.6-5.5 8-5.5q.796 0 1.551.094M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8.25 6.5h4m-3 0v2.75L15 21.5h6.5l-2.25-4.75V14");
}
</style><path class="x5i0rq_ph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:citizen-science"} {...others} />);
}

export default Component;
