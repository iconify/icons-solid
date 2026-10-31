import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqcf44yln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqcf44yln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-collapse-duotone-round"} {...others} />);
}

export default Component;
