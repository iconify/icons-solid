import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng5pp8tbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ng5pp8tbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:eye-off"} {...others} />);
}

export default Component;
