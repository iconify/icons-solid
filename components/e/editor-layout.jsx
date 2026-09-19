import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pk2e3lkou.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pk2e3lkou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:editor-layout"} {...others} />);
}

export default Component;
