import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/eo0qe5b0c.css';
import '../../css/p/ps-z6_bls.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="eo0qe5b0c"/><path class="ps-z6_bls"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:voice-activation-1"} {...others} />);
}

export default Component;
