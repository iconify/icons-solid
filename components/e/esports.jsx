import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pqh3v7bpt.css';
import '../../css/d/d9g1r_bja.css';
import '../../css/g/gtu5-_bfv.css';
import '../../css/f/fk4r96bud.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="pqh3v7bpt"/><path class="d9g1r_bja"/><path class="gtu5-_bfv"/><path class="fk4r96bud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:esports"} {...others} />);
}

export default Component;
