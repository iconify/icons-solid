import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r85lcmtxs.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r85lcmtxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:split-vertical-solid"} {...others} />);
}

export default Component;
