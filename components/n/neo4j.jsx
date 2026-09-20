import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o67-rbbrh.css';
import '../../css/k/kv7scgbdl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o67-rbbrh"/><path class="kv7scgbdl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:neo4j"} {...others} />);
}

export default Component;
