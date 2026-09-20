import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/krek1qb5c.css';
import '../../css/k/kkqpawebx.css';
import '../../css/t/t2zt86a2w.css';
import '../../css/f/fb89hc7os.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="krek1qb5c"/><path class="kkqpawebx"/><path class="t2zt86a2w"/><path class="fb89hc7os"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:office-desk-1"} {...others} />);
}

export default Component;
