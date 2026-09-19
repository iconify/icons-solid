import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co2jqtext.css';
import '../../css/w/wndsmq8hh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="co2jqtext duoicon-secondary-layer"/><path class="duoicon-primary-layer wndsmq8hh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:settings"} {...others} />);
}

export default Component;
