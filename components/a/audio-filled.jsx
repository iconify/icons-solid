import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yslamubfc.css';
import '../../css/q/q58srweot.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yslamubfc"/><path class="q58srweot"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:audio-filled"} {...others} />);
}

export default Component;
