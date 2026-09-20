import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/y/ysjvvlbsv.css';
import '../../css/l/l73okraoi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="ysjvvlbsv"/><path class="l73okraoi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:search-alt-duotone-line"} {...others} />);
}

export default Component;
