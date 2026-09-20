import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/h4m9tpedx.css';
import '../../css/g/g100mfbew.css';
import '../../css/h/hg-jr4bbd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="h4m9tpedx"/><path class="g100mfbew"/><path class="hg-jr4bbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:document-broken"} {...others} />);
}

export default Component;
