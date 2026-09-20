import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2d6u8bjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2d6u8bjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:text-align-end"} {...others} />);
}

export default Component;
