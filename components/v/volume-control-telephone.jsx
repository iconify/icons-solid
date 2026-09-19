import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1oi6_bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e1oi6_bbg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:volume-control-telephone"} {...others} />);
}

export default Component;
