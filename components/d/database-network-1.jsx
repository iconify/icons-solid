import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z58p1d3ec.css';
import '../../css/t/tscluyl0b.css';
import '../../css/u/uwqzc_bsf.css';
import '../../css/v/vis7tzbty.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z58p1d3ec"/><path class="tscluyl0b"/><path class="uwqzc_bsf"/><path class="vis7tzbty"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:database-network-1"} {...others} />);
}

export default Component;
