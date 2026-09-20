import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydh90c3is.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ydh90c3is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:fx-filled"} {...others} />);
}

export default Component;
