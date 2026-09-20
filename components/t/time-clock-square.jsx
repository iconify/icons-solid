import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vm-_47e8t.css';
import '../../css/m/mezpqlmpc.css';
import '../../css/g/gimgq9j2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="vm-_47e8t"/><path class="mezpqlmpc"/><path class="gimgq9j2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:time-clock-square"} {...others} />);
}

export default Component;
