import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0fu8dkns.css';
import '../../css/y/y66poj2zc.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="d0fu8dkns"/><path class="y66poj2zc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gallery-thumbnails-filled"} {...others} />);
}

export default Component;
