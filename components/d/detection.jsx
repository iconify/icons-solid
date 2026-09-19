import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/a/aimf4ebuf.css';
import '../../css/c/c6vox3all.css';
import '../../css/t/tfpzyrb-p.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path clip-rule="evenodd" class="aimf4ebuf"/><path class="c6vox3all"/><path class="tfpzyrb-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:detection"} {...others} />);
}

export default Component;
