import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hz28tfban.css';
import '../../css/x/xcdes0mdw.css';

const viewBox = {"width":301,"height":151};
const content = `<g class="ft5dv1b6b"><path class="hz28tfban"/><path class="xcdes0mdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cif:lv"} {...others} />);
}

export default Component;
