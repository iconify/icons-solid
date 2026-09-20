import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g_jsbb1dt.css';
import '../../css/n/noh410t_c.css';
import '../../css/z/zz74stmfh.css';
import '../../css/f/fmh8jmarv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g_jsbb1dt"/><path class="noh410t_c"/><path class="zz74stmfh"/><path class="fmh8jmarv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:upload-circle"} {...others} />);
}

export default Component;
