import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w70lsgs8c.css';
import '../../css/d/dlpk8tb7x.css';
import '../../css/p/pvytqg7gd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="w70lsgs8c"><path class="dlpk8tb7x"/><path class="pvytqg7gd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:paragraphs-symbol"} {...others} />);
}

export default Component;
