import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/p/p1njaob-i.css';
import '../../css/u/ulke3igkc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="p1njaob-i"/><path class="ulke3igkc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:message-information"} {...others} />);
}

export default Component;
