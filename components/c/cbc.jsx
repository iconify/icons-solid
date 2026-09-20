import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/objhju3au.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="objhju3au"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cbc"} {...others} />);
}

export default Component;
