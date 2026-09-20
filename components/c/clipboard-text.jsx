import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isyff-8qj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isyff-8qj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi-light:clipboard-text"} {...others} />);
}

export default Component;
