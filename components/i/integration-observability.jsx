import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qnu9x_btz.css';
import '../../css/u/uf4j-xoii.css';
import '../../css/k/kk9m20bqm.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="qnu9x_btz"/><path clip-rule="evenodd" class="uf4j-xoii"/><path clip-rule="evenodd" class="kk9m20bqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:integration-observability"} {...others} />);
}

export default Component;
