import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jg3relvbv.css';
import '../../css/i/iu6iqfljn.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="jg3relvbv"/><path class="iu6iqfljn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:bco"} {...others} />);
}

export default Component;
