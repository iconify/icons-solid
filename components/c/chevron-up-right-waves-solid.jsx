import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo8ai3bxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo8ai3bxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-up-right-waves-solid"} {...others} />);
}

export default Component;
