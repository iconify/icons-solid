import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdy-seb3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fdy-seb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:keyboard-close"} {...others} />);
}

export default Component;
