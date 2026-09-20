import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fuf_rigco {
  fill: currentColor;
  d: path("M3.73 19.577v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268zM3.73 7.578V4.423h16.54v3.154zm1.54-.77h1.615V5.193H5.268zm-1.54 6.77v-3.154h16.54v3.154zm1.54-.77h1.615v-1.615H5.268z");
}
</style><path class="fuf_rigco"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:storage-outline-sharp"} {...others} />);
}

export default Component;
