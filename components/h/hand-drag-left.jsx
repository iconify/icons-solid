import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hv3ov9ble.css';
import '../../css/k/klbazzbca.css';
import '../../css/a/al-0xqbnt.css';
import '../../css/a/a-0zs9b1g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hv3ov9ble"/><path class="klbazzbca"/><path class="al-0xqbnt"/><path class="a-0zs9b1g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:hand-drag-left"} {...others} />);
}

export default Component;
