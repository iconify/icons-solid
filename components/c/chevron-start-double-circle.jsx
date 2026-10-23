import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jgv0hqbcf.css';
import '../../css/p/pzugt234v.css';
import '../../css/s/sykwu6bmj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jgv0hqbcf"/><path class="pzugt234v"/><path class="sykwu6bmj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:chevron-start-double-circle"} {...others} />);
}

export default Component;
