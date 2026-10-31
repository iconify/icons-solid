import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r432ibcon.css';
import '../../css/s/se_a7bc9n.css';
import '../../css/n/nk2-52bxw.css';
import '../../css/b/bvjt0jjgi.css';
import '../../css/x/xr82y342s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r432ibcon wm-shadow"/><path class="se_a7bc9n wm-shadow"/><path class="nk2-52bxw"/><path class="bvjt0jjgi"/><path class="xr82y342s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:helicopter"} {...others} />);
}

export default Component;
