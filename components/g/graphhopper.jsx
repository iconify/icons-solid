import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj0ca7rqc.css';
import '../../css/i/ij9mepbyb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="bj0ca7rqc"/><path class="ij9mepbyb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:graphhopper"} {...others} />);
}

export default Component;
