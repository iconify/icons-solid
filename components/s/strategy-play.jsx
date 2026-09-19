import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjf3h00br.css';
import '../../css/j/jm0mfbcid.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wjf3h00br"/><path class="jm0mfbcid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:strategy-play"} {...others} />);
}

export default Component;
