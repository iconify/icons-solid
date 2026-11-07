import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/ljipgdcmu.css';
import '../../css/b/b24f5vk0n.css';
import '../../css/v/vznjcc47g.css';
import '../../css/n/nngezdbuo.css';
import '../../css/g/g9h45abrt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ljipgdcmu"/><path class="b24f5vk0n"/><path class="vznjcc47g"/><path class="nngezdbuo"/><path class="g9h45abrt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:conditioner-broken"} {...others} />);
}

export default Component;
