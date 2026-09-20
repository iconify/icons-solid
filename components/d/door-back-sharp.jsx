import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n3-wyxb3m {
  fill: currentColor;
  d: path("M4 20v-1h2V4h12v15h2v1zm6.309-7.46q.23-.23.23-.54t-.23-.54t-.54-.23t-.54.23T9 12t.23.54t.54.23t.539-.23");
}
</style><path class="n3-wyxb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:door-back-sharp"} {...others} />);
}

export default Component;
