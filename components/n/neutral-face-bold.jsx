import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/istz93bkq.css';
import '../../css/d/d1nyn72ly.css';
import '../../css/y/ylzxxojfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="h01tyzbfu"><circle class="istz93bkq"/><path class="d1nyn72ly"/><path class="ylzxxojfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:neutral-face-bold"} {...others} />);
}

export default Component;
