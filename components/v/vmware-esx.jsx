import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgzsz4bdl.css';
import '../../css/l/l65istbut.css';
import '../../css/f/fufcd88mx.css';
import '../../css/y/y_20o_7ht.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fgzsz4bdl"/><path class="l65istbut"/><path class="fufcd88mx"/><path class="y_20o_7ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vmware-esx"} {...others} />);
}

export default Component;
