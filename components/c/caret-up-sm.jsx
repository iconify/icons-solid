import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oppwr_pjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oppwr_pjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:caret-up-sm"} {...others} />);
}

export default Component;
