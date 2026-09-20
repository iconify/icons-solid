import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxgn3kbue.css';
import '../../css/h/h-c75yrdf.css';
import '../../css/g/g953mjzjb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oxgn3kbue"/><path class="h-c75yrdf"/><path class="g953mjzjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:kherad-light"} {...others} />);
}

export default Component;
