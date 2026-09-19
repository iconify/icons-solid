import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sa-m42b2p.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="sa-m42b2p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:couchbase"} {...others} />);
}

export default Component;
