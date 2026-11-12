import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt4q6qbni.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wt4q6qbni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:shaarli-dark"} {...others} />);
}

export default Component;
