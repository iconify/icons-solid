import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvuj97b5z.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="wvuj97b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:graph"} {...others} />);
}

export default Component;
