import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eysv7-b1j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b eysv7-b1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:letterboxd"} {...others} />);
}

export default Component;
