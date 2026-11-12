import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-au2bijw.css';
import '../../css/j/jv20dbsyk.css';
import '../../css/i/ijutckbcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q-au2bijw"/><path class="jv20dbsyk"/><path class="ijutckbcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:microsoft-forms-light"} {...others} />);
}

export default Component;
