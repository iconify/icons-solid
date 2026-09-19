import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qyw2t8n3g.css';
import '../../css/f/fqmfpk6cs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qyw2t8n3g"/><path class="fqmfpk6cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:refresh"} {...others} />);
}

export default Component;
