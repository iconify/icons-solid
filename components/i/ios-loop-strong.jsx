import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pc2-_9bsz.css';
import '../../css/h/htsp7iemw.css';
import '../../css/g/geee6pspy.css';
import '../../css/c/c9czsybcg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pc2-_9bsz"/><path class="htsp7iemw"/><path class="geee6pspy"/><path class="c9czsybcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-loop-strong"} {...others} />);
}

export default Component;
