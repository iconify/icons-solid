import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcn445bjj.css';
import '../../css/n/n0ox2dbky.css';
import '../../css/j/j-ig1ab3q.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dcn445bjj"/><path clip-rule="evenodd" class="n0ox2dbky"/><path class="j-ig1ab3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smiley-sparks-flat"} {...others} />);
}

export default Component;
