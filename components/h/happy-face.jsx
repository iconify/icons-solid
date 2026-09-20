import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/t/tejuo1bjd.css';
import '../../css/c/cflizlb9f.css';
import '../../css/q/q5m2swb8b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="tejuo1bjd"/><path class="cflizlb9f"/><path class="q5m2swb8b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:happy-face"} {...others} />);
}

export default Component;
