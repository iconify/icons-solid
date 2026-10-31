import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ydd4rb9ai.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ydd4rb9ai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:corner-down-left-gloss"} {...others} />);
}

export default Component;
