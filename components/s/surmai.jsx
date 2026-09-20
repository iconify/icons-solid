import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ml8v7dbnf.css';
import '../../css/v/vqiudcbyw.css';
import '../../css/p/pv376mv6c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ml8v7dbnf"/><path class="vqiudcbyw"/><circle class="pv376mv6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surmai"} {...others} />);
}

export default Component;
