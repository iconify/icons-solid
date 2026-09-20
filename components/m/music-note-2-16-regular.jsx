import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.n8kdn0ytq {
  fill: currentColor;
  d: path("M12 5.21v5.058A2 2 0 1 0 13 12V1.925a.8.8 0 0 0-1.07-.754l-6.4 2.286A.8.8 0 0 0 5 4.21v7.057A2 2 0 1 0 6 13V7.351zm0-1.062L6 6.29V4.352l6-2.143zM11 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="n8kdn0ytq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:music-note-2-16-regular"} {...others} />);
}

export default Component;
