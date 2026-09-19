import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pnd6bg8sr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pnd6bg8sr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:wifi-off"} {...others} />);
}

export default Component;
