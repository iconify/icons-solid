import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9vvm_wmz.css';
import '../../css/z/zpxidp81t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w9vvm_wmz"/><path class="zpxidp81t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:graph-bar-vertical-24"} {...others} />);
}

export default Component;
