import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wy30u51ex.css';
import '../../css/w/wz4ax7bsl.css';
import '../../css/i/ixld5pddd.css';
import '../../css/c/cfj91n6ry.css';
import '../../css/y/y5584wbel.css';
import '../../css/x/xo57rpbne.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wy30u51ex"/><path class="wz4ax7bsl"/><path class="ixld5pddd"/><path class="cfj91n6ry"/><path class="y5584wbel"/><path class="xo57rpbne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:factory-plant"} {...others} />);
}

export default Component;
