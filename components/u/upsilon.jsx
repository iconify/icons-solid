import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muqxr2obz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muqxr2obz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:upsilon"} {...others} />);
}

export default Component;
