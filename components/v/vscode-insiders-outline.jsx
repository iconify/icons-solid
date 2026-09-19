import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yaxvt8d_n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yaxvt8d_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:vscode-insiders-outline"} {...others} />);
}

export default Component;
