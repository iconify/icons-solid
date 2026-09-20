import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mhemkvj0k.css';
import '../../css/i/ia8dsjebn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mhemkvj0k"/><rect class="ia8dsjebn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:battery"} {...others} />);
}

export default Component;
