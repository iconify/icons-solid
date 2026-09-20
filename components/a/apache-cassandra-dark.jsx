import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knh3k_bfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="knh3k_bfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:apache-cassandra-dark"} {...others} />);
}

export default Component;
