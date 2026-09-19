import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvzex3bhw.css';
import '../../css/s/shc76rb6l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvzex3bhw"/><path class="shc76rb6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:save-down-1"} {...others} />);
}

export default Component;
