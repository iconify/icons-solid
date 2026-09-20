import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mk9ky-bpe.css';
import '../../css/q/qnu9x_btz.css';
import '../../css/q/qgw5s4bhc.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="mk9ky-bpe"/><path class="qnu9x_btz"/><path clip-rule="evenodd" class="qgw5s4bhc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:integration-general"} {...others} />);
}

export default Component;
