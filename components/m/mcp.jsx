import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bm-9v2lvg.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="bm-9v2lvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:mcp"} {...others} />);
}

export default Component;
