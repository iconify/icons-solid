import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w25qbkz2x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="w25qbkz2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:birthday-cake"} {...others} />);
}

export default Component;
