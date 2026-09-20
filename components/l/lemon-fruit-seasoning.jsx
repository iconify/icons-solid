import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ovgf0bcxp.css';
import '../../css/o/odq6l9poi.css';
import '../../css/p/p3ck7kzxq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="ovgf0bcxp"/><path class="odq6l9poi"/><path class="p3ck7kzxq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:lemon-fruit-seasoning"} {...others} />);
}

export default Component;
