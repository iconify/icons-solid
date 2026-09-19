import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylgliubwh.css';
import '../../css/w/w-gbphaza.css';
import '../../css/v/vlmlzenit.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ylgliubwh"/><path class="w-gbphaza"/><path class="vlmlzenit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:dash"} {...others} />);
}

export default Component;
