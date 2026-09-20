import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/shs3jubvs.css';
import '../../css/k/kmc13xb3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="shs3jubvs"/><path class="kmc13xb3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:sudoku"} {...others} />);
}

export default Component;
