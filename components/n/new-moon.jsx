import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/usozxnbrm.css';
import '../../css/u/u50yvab1y.css';
import '../../css/c/c5a_m3jtk.css';

const viewBox = {"width":72,"height":72};
const content = `<circle class="usozxnbrm"/><circle class="u50yvab1y"/><circle class="c5a_m3jtk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:new-moon"} {...others} />);
}

export default Component;
