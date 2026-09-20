import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o-0yl8bbv.css';
import '../../css/y/y6q57qbvj.css';
import '../../css/i/ilu-e1xuu.css';
import '../../css/b/b11qjab4v.css';
import '../../css/l/ljn_g8bng.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o-0yl8bbv"/><path class="y6q57qbvj"/><path class="ilu-e1xuu"/><path class="b11qjab4v"/><path class="ljn_g8bng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:workspace-desk"} {...others} />);
}

export default Component;
