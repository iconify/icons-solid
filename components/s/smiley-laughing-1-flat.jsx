import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcn445bjj.css';
import '../../css/b/blmcabbvb.css';
import '../../css/a/a-7sm7b-z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dcn445bjj"/><path clip-rule="evenodd" class="blmcabbvb"/><path class="a-7sm7b-z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smiley-laughing-1-flat"} {...others} />);
}

export default Component;
