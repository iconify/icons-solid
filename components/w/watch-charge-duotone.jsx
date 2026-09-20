import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n0vt6rb9h.css';
import '../../css/e/eprh56tkw.css';
import '../../css/q/qtrprv4bt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="n0vt6rb9h"/><path class="eprh56tkw"/><path clip-rule="evenodd" class="qtrprv4bt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:watch-charge-duotone"} {...others} />);
}

export default Component;
