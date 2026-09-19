import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zazmrjb_r {
  fill: currentColor;
  d: path("M12 3L1 11.4l1.21 1.59L4 11.62V21h16v-9.38l1.79 1.36L23 11.4zm6 16H6v-8.9l6-4.58l6 4.58zm-9-5c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m3-1c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m3 1c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1");
}
</style><path class="zazmrjb_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-other-houses"} {...others} />);
}

export default Component;
