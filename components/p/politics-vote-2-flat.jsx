import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gl7pqnkcp.css';
import '../../css/g/g3h4cbcxf.css';
import '../../css/h/hrqgondkf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="gl7pqnkcp"/><path class="g3h4cbcxf"/><path class="hrqgondkf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:politics-vote-2-flat"} {...others} />);
}

export default Component;
