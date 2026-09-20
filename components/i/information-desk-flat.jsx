import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kvfzt4bwz.css';
import '../../css/q/qnd0ae6cu.css';
import '../../css/l/l7v84ibfy.css';
import '../../css/v/voafain7q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kvfzt4bwz"/><path class="qnd0ae6cu"/><path clip-rule="evenodd" class="l7v84ibfy"/><path clip-rule="evenodd" class="voafain7q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:information-desk-flat"} {...others} />);
}

export default Component;
