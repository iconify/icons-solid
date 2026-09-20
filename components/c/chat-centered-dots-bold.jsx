import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.eyvfl4h4a {
  fill: currentColor;
  d: path("M88 120a16 16 0 1 1 16 16a16 16 0 0 1-16-16m64 16a16 16 0 1 0-16-16a16 16 0 0 0 16 16m84-80v128a20 20 0 0 1-20 20h-58.11l-12.52 21.92a20 20 0 0 1-34.74 0L98.11 204H40a20 20 0 0 1-20-20V56a20 20 0 0 1 20-20h176a20 20 0 0 1 20 20m-24 4H44v120h61.07a12 12 0 0 1 10.42 6.05L128 207.94l12.51-21.89a12 12 0 0 1 10.42-6.05H212Z");
}
</style><path class="eyvfl4h4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:chat-centered-dots-bold"} {...others} />);
}

export default Component;
