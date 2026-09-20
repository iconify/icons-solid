import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qcppdqbtu.css';
import '../../css/r/ryx-c9qlj.css';
import '../../css/a/avygn0bfd.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qcppdqbtu"/><path class="ryx-c9qlj"/><path class="avygn0bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pencil:raise-hand"} {...others} />);
}

export default Component;
