import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgiz5hr3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zgiz5hr3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:tokyo-metro"} {...others} />);
}

export default Component;
