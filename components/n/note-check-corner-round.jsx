import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-gdrnhrh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-gdrnhrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-check-corner-round"} {...others} />);
}

export default Component;
