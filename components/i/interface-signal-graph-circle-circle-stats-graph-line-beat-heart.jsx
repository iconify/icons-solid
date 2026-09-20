import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn94_qbhs.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="dn94_qbhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-signal-graph-circle-circle-stats-graph-line-beat-heart"} {...others} />);
}

export default Component;
