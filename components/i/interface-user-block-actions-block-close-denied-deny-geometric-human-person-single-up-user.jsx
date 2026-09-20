import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/x/xishbgben.css';
import '../../css/k/kun76w_jo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><circle class="xishbgben"/><path class="kun76w_jo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-user-block-actions-block-close-denied-deny-geometric-human-person-single-up-user"} {...others} />);
}

export default Component;
