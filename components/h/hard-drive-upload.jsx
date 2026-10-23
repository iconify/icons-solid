import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t68w9oc2c.css';
import '../../css/t/tznk6deck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t68w9oc2c"/><path class="tznk6deck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:hard-drive-upload"} {...others} />);
}

export default Component;
