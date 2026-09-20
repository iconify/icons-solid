import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2f8b2rvm.css';
import '../../css/x/x6v_hdcvm.css';
import '../../css/f/fipt221up.css';
import '../../css/o/o4ntkwbym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d2f8b2rvm"/><path class="x6v_hdcvm"/><path class="fipt221up"/><path class="o4ntkwbym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:houses"} {...others} />);
}

export default Component;
