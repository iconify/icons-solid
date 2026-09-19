import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vw7-gdcrh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vw7-gdcrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:facebook-filled"} {...others} />);
}

export default Component;
