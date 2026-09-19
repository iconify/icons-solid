import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lk6j5fb6o.css';
import '../../css/g/gjcd6v95u.css';
import '../../css/n/na-jkxb6v.css';
import '../../css/r/ry5_27_1i.css';
import '../../css/y/yw5pmga3a.css';
import '../../css/d/du9xmtbkj.css';
import '../../css/n/nfpjcmb9z.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="lk6j5fb6o"/><path class="gjcd6v95u"/><path class="na-jkxb6v"/><path class="ry5_27_1i"/><path class="yw5pmga3a"/><path class="du9xmtbkj"/><path class="nfpjcmb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:bazel-wordmark"} {...others} />);
}

export default Component;
