import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dw1j1ccsi.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wssr8ubfg.css';
import '../../css/m/mrx54rbjt.css';
import '../../css/b/bvxuivbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dw1j1ccsi secondary"/><g class="dt0cm9dhy primary"><path class="wssr8ubfg"/><path class="mrx54rbjt"/><path class="bvxuivbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:symmetry-vertical-duo"} {...others} />);
}

export default Component;
