import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csk3q3blj.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="csk3q3blj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-outline"} {...others} />);
}

export default Component;
