import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yk89cv11i.css';
import '../../css/p/pzv8ok-ff.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="yk89cv11i"/><path class="pzv8ok-ff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ae"} {...others} />);
}

export default Component;
