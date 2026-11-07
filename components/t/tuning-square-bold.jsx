import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lpnpk4e6q.css';
import '../../css/i/igdewsque.css';
import '../../css/w/w8w8g15oz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lpnpk4e6q"/><path class="igdewsque"/><path clip-rule="evenodd" class="w8w8g15oz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tuning-square-bold"} {...others} />);
}

export default Component;
