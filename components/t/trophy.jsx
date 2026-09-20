import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/c0dcpubfz.css';
import '../../css/f/f5q372mbj.css';
import '../../css/z/zus3k94wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="c0dcpubfz"/><path class="f5q372mbj"/><path class="zus3k94wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:trophy"} {...others} />);
}

export default Component;
