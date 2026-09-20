import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pojcwywxn.css';
import '../../css/n/nq7hwwb6d.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pojcwywxn"/><path class="nq7hwwb6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:gathio"} {...others} />);
}

export default Component;
