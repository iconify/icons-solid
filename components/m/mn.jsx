import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yg0o10_4s.css';
import '../../css/o/o5hv19emx.css';
import '../../css/o/ofzo2jb0f.css';
import '../../css/b/bi_brubdr.css';
import '../../css/n/ntng6p7ow.css';
import '../../css/x/x2am3acvq.css';
import '../../css/g/gz8n10kln.css';
import '../../css/e/emmldwb5y.css';
import '../../css/u/uudf2hfag.css';
import '../../css/i/iuwzhxb0w.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="bi12bsetm"><path class="yg0o10_4s"/><path class="o5hv19emx"/><circle class="ofzo2jb0f"/><circle class="bi_brubdr"/><circle class="ntng6p7ow"/><path class="x2am3acvq"/><circle class="gz8n10kln"/><path class="emmldwb5y"/><circle class="uudf2hfag"/><circle class="iuwzhxb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:mn"} {...others} />);
}

export default Component;
