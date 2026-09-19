import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq-v7yb2v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="qq-v7yb2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:lymph-nodes"} {...others} />);
}

export default Component;
