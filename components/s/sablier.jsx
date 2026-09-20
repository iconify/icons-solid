import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzahbq16r.css';
import '../../css/x/xlg8q8b-i.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzahbq16r"/><path class="xlg8q8b-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sablier"} {...others} />);
}

export default Component;
