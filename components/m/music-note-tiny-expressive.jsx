import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pyzav_krx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pyzav_krx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:music-note-tiny-expressive"} {...others} />);
}

export default Component;
