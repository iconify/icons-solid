import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qukvbeb.css';
import '../../css/m/myq0osbcx.css';
import '../../css/a/alecpcekt.css';
import '../../css/c/cv29znpsp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z5qukvbeb"/><path class="myq0osbcx"/><path class="alecpcekt"/><path class="cv29znpsp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:database"} {...others} />);
}

export default Component;
