import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw30mccjj.css';
import '../../css/w/w-fm7jz3a.css';
import '../../css/i/idx93qbfz.css';
import '../../css/c/cf9gd76rf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hw30mccjj"/><circle class="w-fm7jz3a"/><path class="idx93qbfz"/><path class="cf9gd76rf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cloudreve-light"} {...others} />);
}

export default Component;
