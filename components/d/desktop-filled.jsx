import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdb3-q2ts.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hdb3-q2ts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:desktop-filled"} {...others} />);
}

export default Component;
