import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ls8d-5bsw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ls8d-5bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:binoculars"} {...others} />);
}

export default Component;
