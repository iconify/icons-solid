import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrtryqu9x.css';
import '../../css/k/ke7qhdp9v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrtryqu9x"/><path class="ke7qhdp9v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:microphone-alt"} {...others} />);
}

export default Component;
