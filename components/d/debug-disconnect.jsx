import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fte7bcbkv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fte7bcbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:debug-disconnect"} {...others} />);
}

export default Component;
