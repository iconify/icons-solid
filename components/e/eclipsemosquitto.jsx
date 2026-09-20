import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hkfl6o0qj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hkfl6o0qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:eclipsemosquitto"} {...others} />);
}

export default Component;
