import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0pl5fbue.css';
import '../../css/h/h-67_2kzm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c0pl5fbue"/><path clip-rule="evenodd" class="h-67_2kzm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:tom-24"} {...others} />);
}

export default Component;
