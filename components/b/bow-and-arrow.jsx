import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozerakbgv.css';
import '../../css/g/glfvv6bkn.css';
import '../../css/g/gfjgj5bsy.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/p/pe6ae7qfy.css';
import '../../css/z/zis3p-m8u.css';
import '../../css/s/squ0yg8xb.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ozerakbgv"/><path class="glfvv6bkn"/><path class="gfjgj5bsy"/><g class="brzn_0bpr"><path class="pe6ae7qfy"/><path class="zis3p-m8u"/><path class="squ0yg8xb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bow-and-arrow"} {...others} />);
}

export default Component;
