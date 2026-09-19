import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/i/iwuczv0ck.css';
import '../../css/u/u8-zfpbxo.css';
import '../../css/w/wjp08nafp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="iwuczv0ck"/><path class="u8-zfpbxo"/><path class="wjp08nafp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:bridge-3d"} {...others} />);
}

export default Component;
