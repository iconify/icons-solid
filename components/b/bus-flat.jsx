import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k5_gewb3i.css';
import '../../css/s/sixi-whom.css';
import '../../css/p/p68rrab7a.css';
import '../../css/i/irzzjrgqm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="k5_gewb3i"/><path clip-rule="evenodd" class="sixi-whom"/><path clip-rule="evenodd" class="p68rrab7a"/><path clip-rule="evenodd" class="irzzjrgqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:bus-flat"} {...others} />);
}

export default Component;
