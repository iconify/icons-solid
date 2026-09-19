import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r64x3ubrb.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="r64x3ubrb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:loadbar"} {...others} />);
}

export default Component;
