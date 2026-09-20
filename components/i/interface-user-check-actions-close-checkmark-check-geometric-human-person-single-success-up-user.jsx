import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/av-ze3uhq.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/m/mjs6u-cpe.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="av-ze3uhq"/><circle class="gdjy5jlqy"/><path class="mjs6u-cpe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-user-check-actions-close-checkmark-check-geometric-human-person-single-success-up-user"} {...others} />);
}

export default Component;
