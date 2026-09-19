import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw74_bujk.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="mw74_bujk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:aircraft"} {...others} />);
}

export default Component;
