import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoore9bru.css';
import '../../css/a/ailbzjhcb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xoore9bru"/><path class="ailbzjhcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:google-slides-dark"} {...others} />);
}

export default Component;
