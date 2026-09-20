import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wxwloacjj.css';
import '../../css/v/vy3x4abmt.css';
import '../../css/b/bgbwufb-u.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="wxwloacjj"/><path class="vy3x4abmt"/><path class="bgbwufb-u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:shop-street-sign"} {...others} />);
}

export default Component;
