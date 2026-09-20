import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1ehicctz.css';
import '../../css/w/wakq1qbfu.css';
import '../../css/y/yuptbzgva.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o1ehicctz"/><path class="wakq1qbfu"/><path class="yuptbzgva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:label-folder-tag-flat"} {...others} />);
}

export default Component;
