import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/utau-8bnp.css';
import '../../css/s/sre57jb1n.css';
import '../../css/o/oqnyozb4u.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="utau-8bnp"/><path class="sre57jb1n"/><path clip-rule="evenodd" class="oqnyozb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:flu-mask-flat"} {...others} />);
}

export default Component;
