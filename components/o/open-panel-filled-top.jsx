import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wob2l3rnn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wob2l3rnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:open-panel-filled-top"} {...others} />);
}

export default Component;
