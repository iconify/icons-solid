import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/foe4c7nyp.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="foe4c7nyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:tree-two-level"} {...others} />);
}

export default Component;
