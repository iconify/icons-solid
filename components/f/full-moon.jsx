import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ciqskgrxn.css';
import '../../css/c/c5a_m3jtk.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="ciqskgrxn"/><circle class="c5a_m3jtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:full-moon"} {...others} />);
}

export default Component;
