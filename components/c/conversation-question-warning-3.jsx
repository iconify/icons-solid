import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lklvkp1im.css';
import '../../css/z/zemnm-17u.css';
import '../../css/e/e19rxxbpp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="lklvkp1im"/><path class="zemnm-17u"/><path class="e19rxxbpp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:conversation-question-warning-3"} {...others} />);
}

export default Component;
