import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/t3tivrbho.css';
import '../../css/d/dv86dk8ai.css';
import '../../css/y/yv3vxtb5i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="t3tivrbho"/><path class="dv86dk8ai"/><path class="yv3vxtb5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-broken"} {...others} />);
}

export default Component;
