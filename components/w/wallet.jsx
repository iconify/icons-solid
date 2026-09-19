import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jswg7kbdr.css';
import '../../css/f/fecjq6g5y.css';
import '../../css/x/xex-xd4wj.css';
import '../../css/i/idjw04bqv.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path clip-rule="evenodd" class="jswg7kbdr"/><path class="fecjq6g5y"/><path class="xex-xd4wj"/><path class="idjw04bqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:wallet"} {...others} />);
}

export default Component;
