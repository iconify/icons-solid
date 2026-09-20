import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/h/hvfmwi7nn.css';
import '../../css/g/gmsdegu5l.css';

const viewBox = {"width":207,"height":78};
const content = `<g class="nx5d-bc1s"><path class="hvfmwi7nn"/><path class="gmsdegu5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:go-dark"} {...others} />);
}

export default Component;
