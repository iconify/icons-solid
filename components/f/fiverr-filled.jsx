import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/akoau_biy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="akoau_biy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:fiverr-filled"} {...others} />);
}

export default Component;
