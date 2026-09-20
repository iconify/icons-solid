import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1p_6uu5p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h1p_6uu5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:back2-filled"} {...others} />);
}

export default Component;
