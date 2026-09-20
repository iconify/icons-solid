import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jy8zbxglv.css';
import '../../css/o/ohqzu-e4f.css';
import '../../css/f/f79m7eb-d.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="jy8zbxglv"/><path class="ohqzu-e4f"/><path class="f79m7eb-d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smart-watch-square-navigation-alternate"} {...others} />);
}

export default Component;
