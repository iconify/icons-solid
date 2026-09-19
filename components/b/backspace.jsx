import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oanleacgm.css';
import '../../css/o/opsmh7beo.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oanleacgm"/><path class="opsmh7beo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:backspace"} {...others} />);
}

export default Component;
