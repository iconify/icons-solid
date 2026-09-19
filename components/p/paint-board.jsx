import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pqitm7bqk.css';
import '../../css/u/u5xjt86lx.css';
import '../../css/r/rlo9g2qew.css';
import '../../css/i/ina5vcbuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pqitm7bqk"/><circle class="u5xjt86lx"/><circle class="rlo9g2qew"/><path class="ina5vcbuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:paint-board"} {...others} />);
}

export default Component;
