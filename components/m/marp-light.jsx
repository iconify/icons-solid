import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f7ygtfbzr.css';
import '../../css/c/cqb6abcqd.css';
import '../../css/d/dcbk0ez8n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f7ygtfbzr"/><path class="cqb6abcqd"/><path class="dcbk0ez8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:marp-light"} {...others} />);
}

export default Component;
