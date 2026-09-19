import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk1ssk6fg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk1ssk6fg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:telegram"} {...others} />);
}

export default Component;
