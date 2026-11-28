import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qilmos39e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qilmos39e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:piggy-bank-solid"} {...others} />);
}

export default Component;
