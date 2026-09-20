import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8yd1s8eo.css';
import '../../css/o/o0bjgebdu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q8yd1s8eo"/><path class="o0bjgebdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:dify"} {...others} />);
}

export default Component;
