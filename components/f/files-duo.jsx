import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w4ztz2btj.css';
import '../../css/k/k1goh-kki.css';
import '../../css/u/uy8yhu9at.css';
import '../../css/y/yui4pigey.css';
import '../../css/o/o-qp5zbng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="w4ztz2btj"/><path class="k1goh-kki wm-a"/><path class="uy8yhu9at wm-a"/><path class="yui4pigey"/><path class="o-qp5zbng wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files-duo"} {...others} />);
}

export default Component;
