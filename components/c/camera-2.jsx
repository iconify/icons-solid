import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqefj__pe.css';
import '../../css/i/iulpltu0r.css';
import '../../css/d/d24138bra.css';
import '../../css/x/xcr-srb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="zqefj__pe"/><path class="iulpltu0r"/><path class="d24138bra"/><path class="xcr-srb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:camera-2"} {...others} />);
}

export default Component;
