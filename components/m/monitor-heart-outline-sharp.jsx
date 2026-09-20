import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jmo0v4bgs {
  fill: currentColor;
  d: path("M2 9V4h20v5h-2V6H4v3zm0 11v-5h2v3h16v-3h2v5zm5.375-7l1.95 3.9h1.35L14 10.25L15.375 13H22v-2h-5.375l-1.95-3.9h-1.35L10 13.75L8.625 11H2v2zM12 12");
}
</style><path class="jmo0v4bgs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:monitor-heart-outline-sharp"} {...others} />);
}

export default Component;
