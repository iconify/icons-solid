import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o_nnokbqn.css';
import '../../css/u/uvazr1b5a.css';
import '../../css/x/x2m2yac-o.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="o_nnokbqn"/><path class="uvazr1b5a"/><path class="x2m2yac-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:map-fold-flat"} {...others} />);
}

export default Component;
