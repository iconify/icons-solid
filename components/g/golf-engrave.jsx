import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/y/yjzybdkuw.css';
import '../../css/e/efohs445y.css';
import '../../css/s/su76dvw1u.css';
import '../../css/a/ang3hpb4r.css';
import '../../css/q/qrwfd8ber.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k yjzybdkuw"/><path class="efohs445y wm-a"/><path class="su76dvw1u wm-shadow"/><path class="ang3hpb4r wm-k"/><path class="qrwfd8ber wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:golf-engrave"} {...others} />);
}

export default Component;
