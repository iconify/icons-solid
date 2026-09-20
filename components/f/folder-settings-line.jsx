import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi6y_vvsa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi6y_vvsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:folder-settings-line"} {...others} />);
}

export default Component;
