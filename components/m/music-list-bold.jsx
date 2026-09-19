import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xc9b90bna.css';
import '../../css/y/ysh5xgerc.css';
import '../../css/p/po0txjbom.css';
import '../../css/n/nl7257qqh.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="xc9b90bna"><path class="ysh5xgerc"/><ellipse class="po0txjbom"/><path class="nl7257qqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:music-list-bold"} {...others} />);
}

export default Component;
