import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipy5vwtjx.css';
import '../../css/d/d6guelbgt.css';
import '../../css/p/pyhrjesye.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ipy5vwtjx"/><path clip-rule="evenodd" class="d6guelbgt"/><path class="pyhrjesye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:icp"} {...others} />);
}

export default Component;
