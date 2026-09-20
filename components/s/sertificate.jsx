import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/h/h-7l7pzjd.css';
import '../../css/z/zxovm7bti.css';
import '../../css/r/rh76ybc_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="h-7l7pzjd"/><circle class="zxovm7bti"/><path class="rh76ybc_a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sertificate"} {...others} />);
}

export default Component;
