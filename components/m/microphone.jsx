import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t20u6eccm.css';
import '../../css/y/yrtryqu9x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t20u6eccm"/><path class="yrtryqu9x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:microphone"} {...others} />);
}

export default Component;
