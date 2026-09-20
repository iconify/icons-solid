import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gic1lptei.css';
import '../../css/r/ro345yboz.css';
import '../../css/j/jb6rr0b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gic1lptei"><path class="ro345yboz"/><path class="jb6rr0b4a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:player2"} {...others} />);
}

export default Component;
