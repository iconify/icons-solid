import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwaaf0-ei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kwaaf0-ei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:minus-square"} {...others} />);
}

export default Component;
