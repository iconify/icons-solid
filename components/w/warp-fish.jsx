import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/u/uz42igb1u.css';
import '../../css/a/a46aen0he.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="uz42igb1u"/><path class="a46aen0he"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:warp-fish"} {...others} />);
}

export default Component;
