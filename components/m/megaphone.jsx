import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vmlj--b4j.css';
import '../../css/w/w53fznbzo.css';
import '../../css/a/amhn4-8wy.css';
import '../../css/t/tsvzyp4zs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vmlj--b4j wm-shadow"/><path class="w53fznbzo wm-shadow"/><path class="amhn4-8wy"/><path class="tsvzyp4zs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:megaphone"} {...others} />);
}

export default Component;
