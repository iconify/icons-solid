import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4-z3mbwu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4-z3mbwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bulwark-dark"} {...others} />);
}

export default Component;
