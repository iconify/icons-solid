import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l781zc_iy {
  fill: currentColor;
  d: path("M7.673 15.308V4h1.994l6.64 3.244v8.064zM5 20l.827-2.308h12.346L19 20z");
}
</style><path class="l781zc_iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stylus-highlighter-sharp"} {...others} />);
}

export default Component;
