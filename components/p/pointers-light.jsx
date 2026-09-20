import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/s/smoaa5b3r.css';
import '../../css/a/a0twn3bdo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><path class="smoaa5b3r"/><path class="a0twn3bdo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:pointers-light"} {...others} />);
}

export default Component;
