import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/x/x6nhvj-7w.css';
import '../../css/x/xupb65btz.css';
import '../../css/y/y525ptbor.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="x6nhvj-7w"/><path class="xupb65btz"/><circle transform="rotate(90 35 39)" class="y525ptbor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:u-turn-down"} {...others} />);
}

export default Component;
