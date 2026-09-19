import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/v/vm4lbxnji.css';
import '../../css/v/vztlpvtgy.css';
import '../../css/x/xucazj__s.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="vm4lbxnji"/><path class="vztlpvtgy"/><path class="xucazj__s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:red-envelopes"} {...others} />);
}

export default Component;
