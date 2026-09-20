import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifuufmagt.css';
import '../../css/u/ubv5z7b4j.css';

const viewBox = {"width":32,"height":32};
const content = `<rect class="ifuufmagt"/><path class="ubv5z7b4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:huff"} {...others} />);
}

export default Component;
