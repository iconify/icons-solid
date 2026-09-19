import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/by981ukyg.css';
import '../../css/c/c6txoabxd.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="by981ukyg"/><path class="c6txoabxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:tix"} {...others} />);
}

export default Component;
