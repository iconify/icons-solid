import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uwi7ak1nz.css';
import '../../css/h/hjd4hrb9v.css';
import '../../css/l/lf8zclbve.css';
import '../../css/u/unv7mgqkd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uwi7ak1nz"/><path class="hjd4hrb9v"/><path class="lf8zclbve"/><path class="unv7mgqkd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:video-library"} {...others} />);
}

export default Component;
