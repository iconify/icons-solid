import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxyv9z9mh.css';
import '../../css/n/n3jiytb1t.css';
import '../../css/n/naea2ubcj.css';
import '../../css/x/xoslwxbtl.css';
import '../../css/z/zdt345bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="yxyv9z9mh"><path class="n3jiytb1t"/><path class="naea2ubcj"/><path class="xoslwxbtl"/><path class="zdt345bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:3d-sync"} {...others} />);
}

export default Component;
