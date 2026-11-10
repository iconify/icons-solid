import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yprff2b0a.css';
import '../../css/p/pjpf1q9ly.css';
import '../../css/q/qsferiaro.css';
import '../../css/d/d35byld4h.css';
import '../../css/l/layqtnb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yprff2b0a"/><path class="pjpf1q9ly"/><path class="qsferiaro"/><path class="d35byld4h"/><path class="layqtnb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-cloud"} {...others} />);
}

export default Component;
