import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z9a92jqlz.css';
import '../../css/z/zbfvni7ud.css';
import '../../css/w/w5v6gnb2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wm-k z9a92jqlz"/><path class="wm-k zbfvni7ud"/><path class="w5v6gnb2d wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:rainbow"} {...others} />);
}

export default Component;
