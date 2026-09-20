import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1ochcn4a.css';
import '../../css/v/vb1um-bfa.css';
import '../../css/h/h1y2zabxa.css';
import '../../css/y/y9ai6lw9f.css';
import '../../css/z/z99iat1xw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="n1ochcn4a"/><path class="vb1um-bfa"/><path class="h1y2zabxa"/><path class="y9ai6lw9f"/><path class="z99iat1xw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:alipay"} {...others} />);
}

export default Component;
