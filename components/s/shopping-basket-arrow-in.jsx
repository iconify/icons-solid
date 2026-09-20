import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/dt-je9w2i.css';
import '../../css/a/ad6etcbld.css';
import '../../css/w/wd2oux1ap.css';
import '../../css/i/iaurxkbqz.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="dt-je9w2i"/><path class="ad6etcbld"/><path class="wd2oux1ap"/><path class="iaurxkbqz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shopping-basket-arrow-in"} {...others} />);
}

export default Component;
