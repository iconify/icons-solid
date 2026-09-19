import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/c/c5-cmyb3j.css';
import '../../css/u/ugzu9rb9p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="c5-cmyb3j"/><path clip-rule="evenodd" class="ugzu9rb9p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:chromecast-active"} {...others} />);
}

export default Component;
