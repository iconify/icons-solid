import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wdi66abgo.css';
import '../../css/z/z6no5nfgl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="wdi66abgo"/><path class="z6no5nfgl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:icn"} {...others} />);
}

export default Component;
