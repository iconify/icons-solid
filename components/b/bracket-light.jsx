import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfamlxbej.css';
import '../../css/l/lwt7zu3on.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="dfamlxbej"/><path class="lwt7zu3on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bracket-light"} {...others} />);
}

export default Component;
