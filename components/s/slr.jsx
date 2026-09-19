import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/b/byjycd_sr.css';
import '../../css/t/tbv80mx-u.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="byjycd_sr"/><path class="tbv80mx-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:slr"} {...others} />);
}

export default Component;
