import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga618bbrt.css';
import '../../css/s/s1qbo6fdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga618bbrt secondary"/><path class="primary s1qbo6fdq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:star-duo"} {...others} />);
}

export default Component;
