import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi7u_f7uz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi7u_f7uz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:dots-vertical-waves"} {...others} />);
}

export default Component;
