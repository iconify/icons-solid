import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-nb4sbcq {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zm4.5-2.5h5v-4L14 12l.5-.5v-4h-5v4l.5.5l-.5.5zm1-5v-3h3v3zm0 4v-3h3v3z");
}
</style><path class="o-nb4sbcq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-8-outline-sharp"} {...others} />);
}

export default Component;
