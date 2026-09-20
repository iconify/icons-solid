import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n6xinhc7m.css';
import '../../css/s/s1j3mcc6y.css';
import '../../css/y/y04-dybqr.css';
import '../../css/e/ehr251j0l.css';
import '../../css/l/ly3c7gnpg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="n6xinhc7m"/><path clip-rule="evenodd" class="s1j3mcc6y"/><path class="y04-dybqr"/><path clip-rule="evenodd" class="ehr251j0l"/><path class="ly3c7gnpg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:group-add-fill"} {...others} />);
}

export default Component;
