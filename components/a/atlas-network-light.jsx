import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7nig5jq.css';
import '../../css/i/i-8vw9hdb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="jb7nig5jq"/><path class="i-8vw9hdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:atlas-network-light"} {...others} />);
}

export default Component;
