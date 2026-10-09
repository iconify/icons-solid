import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v2lgj0dvw.css';
import '../../css/y/ylt16dbqe.css';
import '../../css/i/i2exa8tnb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="v2lgj0dvw"/><path class="ylt16dbqe"/><path class="i2exa8tnb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:guitar-48-bold"} {...others} />);
}

export default Component;
