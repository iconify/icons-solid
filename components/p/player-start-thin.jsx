import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/lv728hb5d.css';
import '../../css/c/c9w3-fsnb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="lv728hb5d"/><path class="c9w3-fsnb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:player-start-thin"} {...others} />);
}

export default Component;
