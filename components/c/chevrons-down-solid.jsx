import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-u9pu3ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z-u9pu3ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevrons-down-solid"} {...others} />);
}

export default Component;
