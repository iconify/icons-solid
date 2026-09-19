import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qaychqqjn.css';
import '../../css/a/al3btpgqx.css';
import '../../css/s/szxu1c91m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qaychqqjn"/><path class="al3btpgqx"/><path class="szxu1c91m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:keffiyeh"} {...others} />);
}

export default Component;
