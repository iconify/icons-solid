import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/k73nz6b7k.css';
import '../../css/r/r5mq_bbez.css';
import '../../css/z/zqmwupo5u.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="k73nz6b7k"/><path class="r5mq_bbez"/><path class="zqmwupo5u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:politics-compaign-flat"} {...others} />);
}

export default Component;
