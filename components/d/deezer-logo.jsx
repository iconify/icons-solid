import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xw76jf7vg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xw76jf7vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:deezer-logo"} {...others} />);
}

export default Component;
