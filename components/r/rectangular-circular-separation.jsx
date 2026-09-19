import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/f/fz97oyg2s.css';
import '../../css/d/ds2u6g6sa.css';
import '../../css/u/ueq5_pbmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="fz97oyg2s"/><path class="ds2u6g6sa"/><path class="ueq5_pbmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rectangular-circular-separation"} {...others} />);
}

export default Component;
