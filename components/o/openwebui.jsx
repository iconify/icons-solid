import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nx5d-bc1s.css';
import '../../css/g/g9od2_b1c.css';
import '../../css/g/gexzjokqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nx5d-bc1s"><path clip-rule="evenodd" class="g9od2_b1c"/><path class="gexzjokqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openwebui"} {...others} />);
}

export default Component;
