import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gpnm6aciu.css';
import '../../css/m/mo9yrp11u.css';
import '../../css/v/vcqmbfvcz.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="gpnm6aciu"/><path class="mo9yrp11u"/><path class="vcqmbfvcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:camera-print"} {...others} />);
}

export default Component;
