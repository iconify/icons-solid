import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av29ckbtg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av29ckbtg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-memory-card"} {...others} />);
}

export default Component;
