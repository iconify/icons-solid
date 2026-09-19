import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/ggfhrnbon.css';
import '../../css/q/qr3bw21xi.css';
import '../../css/t/ty2664dkh.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="translate(2 5)" class="bi12bsetm"><path class="ggfhrnbon"/><circle class="qr3bw21xi"/><path class="ty2664dkh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:stream-suite"} {...others} />);
}

export default Component;
