import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xsm7l6b8m.css';
import '../../css/x/xjtbn43zn.css';

const viewBox = {"width":94,"height":61};
const content = `<g class="ft5dv1b6b"><path class="xsm7l6b8m"/><path class="xjtbn43zn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:react-router"} {...others} />);
}

export default Component;
