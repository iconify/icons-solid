import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d64zd6inn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d64zd6inn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:hexagons-line"} {...others} />);
}

export default Component;
