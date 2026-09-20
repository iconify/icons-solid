import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/s9wc6d-sy.css';
import '../../css/k/kzuac6bvc.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="s9wc6d-sy"/><path class="kzuac6bvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-id-iris-scan-check-identification-retina-security-approved-success-iris-scan-eye-login"} {...others} />);
}

export default Component;
