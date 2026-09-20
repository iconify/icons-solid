import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dft2f2b5v.css';
import '../../css/v/vvnv8gbas.css';
import '../../css/a/a8-blkb-j.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="dft2f2b5v"/><path class="vvnv8gbas"/><path class="a8-blkb-j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:application-add"} {...others} />);
}

export default Component;
