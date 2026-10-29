import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gn6miabce.css';
import '../../css/t/t7-3-qbad.css';
import '../../css/i/igk2wisce.css';
import '../../css/s/swz8hebuo.css';
import '../../css/o/o392xu8sx.css';
import '../../css/y/y1psqgh7g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="gn6miabce wm-k"/><path class="t7-3-qbad wm-k"/><path class="igk2wisce wm-k"/><path class="swz8hebuo wm-s"/><path class="o392xu8sx wm-s"/><circle class="wm-s y1psqgh7g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:user-cog-sketch"} {...others} />);
}

export default Component;
