import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ov163mcoa.css';
import '../../css/p/ppyq7abdk.css';
import '../../css/i/iz57_fuab.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ov163mcoa"/><path class="ppyq7abdk"/><path class="iz57_fuab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:chalkboard-duo"} {...others} />);
}

export default Component;
