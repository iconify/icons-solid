import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdg70bbkf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jdg70bbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-outline:archive-box-arrow-down"} {...others} />);
}

export default Component;
