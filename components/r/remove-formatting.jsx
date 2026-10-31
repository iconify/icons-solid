import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hn1a-cboy.css';
import '../../css/z/zbpzk_byh.css';
import '../../css/j/jpk91-9vh.css';
import '../../css/p/phkqhabet.css';
import '../../css/h/hq6f8gbyz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hn1a-cboy wm-shadow"/><path class="wm-shadow zbpzk_byh"/><path class="jpk91-9vh"/><path class="phkqhabet"/><path class="hq6f8gbyz wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:remove-formatting"} {...others} />);
}

export default Component;
