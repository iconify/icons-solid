import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxbqhgb_a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="attachment-clip-outline"><path class="Vector wxbqhgb_a" clip-rule="evenodd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:attachment-clip-outline"} {...others} />);
}

export default Component;
