import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n0lpc6lrj.css';
import '../../css/w/wj027_bre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n0lpc6lrj"/><path clip-rule="evenodd" class="wj027_bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:settings-alt-solid"} {...others} />);
}

export default Component;
