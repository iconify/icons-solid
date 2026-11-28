import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gl7r5mbef.css';
import '../../css/v/vkheg01za.css';
import '../../css/y/y9x9hjb6x.css';
import '../../css/v/velqwqzck.css';
import '../../css/r/rpkv4hbxb.css';
import '../../css/v/vuqqfv8ij.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gl7r5mbef"/><path class="vkheg01za"/><path class="y9x9hjb6x"/><path class="velqwqzck"/><path class="rpkv4hbxb"/><path class="vuqqfv8ij"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:bridge"} {...others} />);
}

export default Component;
