import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yj89p6enm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="yj89p6enm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:code-bracket-square-solid"} {...others} />);
}

export default Component;
