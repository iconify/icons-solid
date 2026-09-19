import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/bgk_arrkt.css';
import '../../css/f/fdtkzu5vr.css';
import '../../css/c/cf56gjb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="bgk_arrkt"/><path class="fdtkzu5vr"/><path class="cf56gjb1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:upload-03"} {...others} />);
}

export default Component;
