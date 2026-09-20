import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1hm4ub9h.css';
import '../../css/b/bd6wcc_tt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="g1hm4ub9h"/><path class="bd6wcc_tt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:virtualbox-light"} {...others} />);
}

export default Component;
