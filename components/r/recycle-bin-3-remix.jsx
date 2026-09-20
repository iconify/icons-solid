import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t6gu-qbcj.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="t6gu-qbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:recycle-bin-3-remix"} {...others} />);
}

export default Component;
