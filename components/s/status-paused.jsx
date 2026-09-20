import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6nnf9-3q.css';

const viewBox = {"width":12,"height":12};
const content = `<path clip-rule="evenodd" class="a6nnf9-3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:status-paused"} {...others} />);
}

export default Component;
