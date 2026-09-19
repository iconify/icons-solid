import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu1f9cb1q.css';
import '../../css/e/ebmyan6qe.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="mu1f9cb1q"/><path class="ebmyan6qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:bottom-right"} {...others} />);
}

export default Component;
