import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptc16vbmh.css';
import '../../css/p/pvum3qbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptc16vbmh"/><path class="pvum3qbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:surprised-filled"} {...others} />);
}

export default Component;
