import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/y4nlxfbar.css';
import '../../css/b/b87idobbe.css';
import '../../css/k/k9zxd3b4r.css';
import '../../css/k/kzl419vah.css';
import '../../css/f/fzvryepqp.css';
import '../../css/k/k23fj7bxb.css';
import '../../css/s/s3o3ojbjt.css';
import '../../css/a/acp10rbxw.css';
import '../../css/t/t-j73l2sn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow y4nlxfbar"/><path class="b87idobbe wm-s"/><path class="k9zxd3b4r wm-shadow"/><path class="kzl419vah"/><path class="fzvryepqp"/><path class="k23fj7bxb"/><path class="s3o3ojbjt wm-s"/><path class="acp10rbxw wm-s"/><path class="t-j73l2sn wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:notebook-pen"} {...others} />);
}

export default Component;
