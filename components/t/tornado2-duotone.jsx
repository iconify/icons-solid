import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vhg8nac8h.css';
import '../../css/g/gq1tqbm2t.css';
import '../../css/k/kijgnoboc.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vhg8nac8h"/><path class="gq1tqbm2t"/><path class="kijgnoboc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:tornado2-duotone"} {...others} />);
}

export default Component;
