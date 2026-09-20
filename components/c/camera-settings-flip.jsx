import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/izx1dccqx.css';
import '../../css/e/ebj5f2bdx.css';
import '../../css/u/u-dbt3usg.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="izx1dccqx"/><path class="ebj5f2bdx"/><path class="u-dbt3usg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:camera-settings-flip"} {...others} />);
}

export default Component;
