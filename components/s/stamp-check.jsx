import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe-0n0bjt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xe-0n0bjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:stamp-check"} {...others} />);
}

export default Component;
