import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggaa8vbqw.css';
import '../../css/d/dgyyfkyiu.css';
import '../../css/l/l97nb-quh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggaa8vbqw"/><path class="dgyyfkyiu"/><circle class="l97nb-quh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-wifi"} {...others} />);
}

export default Component;
