import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/z/zdw4xmyfb.css';
import '../../css/a/a46um_4zl.css';
import '../../css/e/ecyv19-eg.css';
import '../../css/v/v42f5pb7z.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><rect class="zdw4xmyfb"/><path class="a46um_4zl"/><path class="ecyv19-eg"/><path class="v42f5pb7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:lotion"} {...others} />);
}

export default Component;
