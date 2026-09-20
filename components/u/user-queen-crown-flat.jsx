import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtx251bom.css';
import '../../css/n/nlphxmb-d.css';
import '../../css/n/naxy12bew.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rtx251bom"/><path clip-rule="evenodd" class="nlphxmb-d"/><path class="naxy12bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:user-queen-crown-flat"} {...others} />);
}

export default Component;
