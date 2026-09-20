import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvjmzfm2h.css';
import '../../css/a/ay64in9vj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lvjmzfm2h"/><path class="ay64in9vj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:surfshark"} {...others} />);
}

export default Component;
