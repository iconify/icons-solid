import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igo4fcchz.css';
import '../../css/g/g57rsqbem.css';
import '../../css/k/ktnlupbwr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="igo4fcchz"/><circle class="g57rsqbem"/><path class="ktnlupbwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:blind"} {...others} />);
}

export default Component;
