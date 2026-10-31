import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/uyx3xmmjk.css';
import '../../css/y/yjyqtluze.css';
import '../../css/v/v24_wabof.css';
import '../../css/z/z0l13u7rz.css';
import '../../css/e/eumle_byd.css';
import '../../css/w/wrqbbdcwi.css';
import '../../css/r/rsa4zwidh.css';
import '../../css/q/qvvzwfjie.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="uyx3xmmjk"/><path class="yjyqtluze"/><path class="v24_wabof wm-shine"/><path class="wm-k z0l13u7rz"/><path class="eumle_byd wm-a"/><path class="wrqbbdcwi"/><path class="rsa4zwidh"/><path class="qvvzwfjie wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:apple"} {...others} />);
}

export default Component;
