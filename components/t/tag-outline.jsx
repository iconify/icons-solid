import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r8b-6stnd.css';
import '../../css/w/waljwkoqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tag-outline"><g class="Vector cuyn6tgcc"><path clip-rule="evenodd" class="r8b-6stnd"/><path class="waljwkoqj"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:tag-outline"} {...others} />);
}

export default Component;
