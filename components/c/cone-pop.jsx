import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/octjy_bbl.css';
import '../../css/p/pu7pftb9c.css';
import '../../css/u/uoaq0bnfg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="octjy_bbl"/><path class="pu7pftb9c"/><path class="uoaq0bnfg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:cone-pop"} {...others} />);
}

export default Component;
