import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/o/owchssbpb.css';
import '../../css/d/dqvcc2bxc.css';
import '../../css/w/wb2sz73pt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="owchssbpb"/><path class="dqvcc2bxc"/><path class="wb2sz73pt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:buy-crypto"} {...others} />);
}

export default Component;
