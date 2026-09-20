import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/halqu7b3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="halqu7b3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:nike"} {...others} />);
}

export default Component;
