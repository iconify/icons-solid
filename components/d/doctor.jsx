import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mbpfbqfii.css';
import '../../css/n/nrolmxo4x.css';
import '../../css/j/jophfjbha.css';

const viewBox = {"width":21,"height":24};
const content = `<path class="mbpfbqfii"/><path class="nrolmxo4x"/><path class="jophfjbha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:doctor"} {...others} />);
}

export default Component;
