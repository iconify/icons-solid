import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h7__qvbfs.css';
import '../../css/o/o_smurbaj.css';
import '../../css/u/ujl_3ub2b.css';
import '../../css/z/ztzj9jb3y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h7__qvbfs"/><path class="o_smurbaj"/><path class="ujl_3ub2b"/><path class="ztzj9jb3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:water-bottle-glass"} {...others} />);
}

export default Component;
