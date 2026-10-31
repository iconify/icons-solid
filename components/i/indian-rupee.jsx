import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ol59wkbir.css';
import '../../css/x/x1s3trbaa.css';
import '../../css/u/upkx9_14y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ol59wkbir wm-shadow"/><path class="wm-shadow x1s3trbaa"/><path class="upkx9_14y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:indian-rupee"} {...others} />);
}

export default Component;
