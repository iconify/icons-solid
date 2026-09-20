import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwhzqxb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jwhzqxb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sign-in-squre-fill"} {...others} />);
}

export default Component;
