import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmhsyhfhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hmhsyhfhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:satoshi-v3-outline"} {...others} />);
}

export default Component;
