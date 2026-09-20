import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a-7kbeaet.css';
import '../../css/n/nz2h3ubvb.css';
import '../../css/w/wp3w3i6vo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="a-7kbeaet"/><path class="nz2h3ubvb"/><path class="wp3w3i6vo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:fragile"} {...others} />);
}

export default Component;
