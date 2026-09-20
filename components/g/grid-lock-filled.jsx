import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc82nbjiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gc82nbjiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:grid-lock-filled"} {...others} />);
}

export default Component;
