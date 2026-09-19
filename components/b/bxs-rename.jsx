import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gxv-nrbxk.css';
import '../../css/e/e03sdjqcb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gxv-nrbxk"/><path class="e03sdjqcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-rename"} {...others} />);
}

export default Component;
