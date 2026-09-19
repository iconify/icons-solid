import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/g/g4iz8vbbj.css';
import '../../css/u/uri8rt3bb.css';
import '../../css/w/wj--2_bna.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="g4iz8vbbj"/><path class="uri8rt3bb"/><path class="wj--2_bna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:land-surveying"} {...others} />);
}

export default Component;
