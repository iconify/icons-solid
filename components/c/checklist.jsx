import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk-w5c0bc.css';
import '../../css/e/e0b6lobqz.css';
import '../../css/z/zkd-pyboe.css';
import '../../css/w/w9fl-49gd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bk-w5c0bc"/><path class="e0b6lobqz"/><path class="zkd-pyboe"/><path class="w9fl-49gd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:checklist"} {...others} />);
}

export default Component;
