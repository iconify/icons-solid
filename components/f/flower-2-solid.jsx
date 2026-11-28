import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpw4bsb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpw4bsb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:flower-2-solid"} {...others} />);
}

export default Component;
