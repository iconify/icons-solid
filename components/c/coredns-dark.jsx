import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yco3q7bmf.css';
import '../../css/v/vqu68vnqt.css';

const viewBox = {"width":361.4,"height":322.9,"left":-1.2,"top":19.05};
const content = `<path class="yco3q7bmf"/><path class="vqu68vnqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:coredns-dark"} {...others} />);
}

export default Component;
