import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r3kb4cgpl.css';
import '../../css/a/ag8lg4baf.css';
import '../../css/w/wh6t2rs6o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="r3kb4cgpl"><path class="ag8lg4baf"/><path class="wh6t2rs6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:playlist-bold"} {...others} />);
}

export default Component;
