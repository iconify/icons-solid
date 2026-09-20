import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/ecivqmbcu.css';
import '../../css/o/o9qo_fb4p.css';
import '../../css/q/q4zs90gqi.css';
import '../../css/p/pqcpz8djw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="ecivqmbcu"/><circle class="o9qo_fb4p"/><path class="q4zs90gqi"/><path class="pqcpz8djw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:alarm-clock"} {...others} />);
}

export default Component;
