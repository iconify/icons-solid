import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnu9x_btz.css';
import '../../css/s/sbulpizdn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="qnu9x_btz"/><path clip-rule="evenodd" class="sbulpizdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:integration-security"} {...others} />);
}

export default Component;
