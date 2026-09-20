import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vepb9acyv.css';
import '../../css/b/b416scm2a.css';
import '../../css/z/zpqifsyap.css';
import '../../css/f/fv4ug6bmv.css';
import '../../css/q/qfhgfbcix.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vepb9acyv"/><path class="b416scm2a"/><path class="zpqifsyap"/><path class="fv4ug6bmv"/><path class="qfhgfbcix"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:windows-coding-duo"} {...others} />);
}

export default Component;
