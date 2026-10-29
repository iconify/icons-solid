import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a42membev.css';
import '../../css/k/kgqu8zbet.css';
import '../../css/h/hu2mk8bbp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a42membev"/><path class="kgqu8zbet"/><path class="hu2mk8bbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:crown"} {...others} />);
}

export default Component;
