import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mdd2sdbqm.css';
import '../../css/e/efp65k_yk.css';
import '../../css/p/pq21tvbkk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mdd2sdbqm"/><path class="efp65k_yk"/><path clip-rule="evenodd" class="pq21tvbkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:magic-hat-2-line"} {...others} />);
}

export default Component;
