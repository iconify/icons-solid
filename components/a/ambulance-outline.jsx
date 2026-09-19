import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u1yv_zb7o.css';
import '../../css/j/juwkrcciy.css';
import '../../css/a/a2_salbpt.css';
import '../../css/r/r2nxirafe.css';
import '../../css/n/ntd5mxbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="u1yv_zb7o"/><path clip-rule="evenodd" class="juwkrcciy"/><path clip-rule="evenodd" class="a2_salbpt"/><path clip-rule="evenodd" class="r2nxirafe"/><path clip-rule="evenodd" class="ntd5mxbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:ambulance-outline"} {...others} />);
}

export default Component;
