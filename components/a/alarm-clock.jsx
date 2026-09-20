import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u148y6bbs.css';
import '../../css/i/id-v8e4aj.css';
import '../../css/h/h1jg740us.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="u148y6bbs"><path class="id-v8e4aj"/><path class="h1jg740us"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:alarm-clock"} {...others} />);
}

export default Component;
