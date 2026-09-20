import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s10jxb77c.css';
import '../../css/q/q0ne03bxg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s10jxb77c"/><path class="q0ne03bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:clh"} {...others} />);
}

export default Component;
