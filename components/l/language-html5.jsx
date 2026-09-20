import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fer6cd8xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fer6cd8xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:language-html5"} {...others} />);
}

export default Component;
