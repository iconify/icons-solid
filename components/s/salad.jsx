import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wq-2nhzsk.css';
import '../../css/s/swd9vnbum.css';
import '../../css/x/xggvebwvx.css';
import '../../css/z/zukopy3pf.css';
import '../../css/u/ua5gpvb3o.css';
import '../../css/a/a3i5tybpp.css';
import '../../css/s/s3m2p4bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-a wq-2nhzsk"/><path class="swd9vnbum wm-a"/><path class="wm-a xggvebwvx"/><path class="wm-k zukopy3pf"/><path class="ua5gpvb3o wm-k"/><path class="a3i5tybpp wm-k"/><path class="s3m2p4bhi wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:salad"} {...others} />);
}

export default Component;
