import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/m/mvgm3_byw.css';
import '../../css/u/u1kvkabbo.css';
import '../../css/k/kitbxqs-d.css';
import '../../css/r/rzr8lmbfw.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="mvgm3_byw"/><path class="u1kvkabbo"/><path class="kitbxqs-d"/><path class="rzr8lmbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-be"} {...others} />);
}

export default Component;
