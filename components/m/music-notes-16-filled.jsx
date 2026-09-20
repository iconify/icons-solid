import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.y8sondphq {
  fill: currentColor;
  d: path("M12 5.21v5.058A2 2 0 1 0 13 12V1.925a.8.8 0 0 0-1.07-.754l-6.4 2.286A.8.8 0 0 0 5 4.21v7.057A2 2 0 1 0 6 13V7.351z");
}
</style><path class="y8sondphq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:music-notes-16-filled"} {...others} />);
}

export default Component;
