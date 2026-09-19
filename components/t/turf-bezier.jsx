import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1mdvbqre.css';
import '../../css/j/jh4i-mbro.css';
import '../../css/i/ipqn73b5n.css';
import '../../css/k/kc2lvibvd.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="e1mdvbqre"/><path class="jh4i-mbro"/><path class="ipqn73b5n"/><path class="kc2lvibvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-bezier"} {...others} />);
}

export default Component;
