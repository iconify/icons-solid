import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmfsq1bxr.css';
import '../../css/b/b6rpw3bnz.css';
import '../../css/c/caacvha9m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mmfsq1bxr"/><path class="b6rpw3bnz"/><path class="caacvha9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:facebook-logo"} {...others} />);
}

export default Component;
