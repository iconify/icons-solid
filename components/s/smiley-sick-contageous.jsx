import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qr28dwbpx.css';
import '../../css/q/qslt2wbxu.css';
import '../../css/s/s1wdbybaz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qr28dwbpx"/><path class="qslt2wbxu"/><path class="s1wdbybaz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smiley-sick-contageous"} {...others} />);
}

export default Component;
