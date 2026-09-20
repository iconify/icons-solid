import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/v/v0jsx44lg.css';
import '../../css/i/iz4x2ebmp.css';
import '../../css/x/xajwtxbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="v0jsx44lg"/><path class="iz4x2ebmp"/><path class="xajwtxbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:z-wave-logo"} {...others} />);
}

export default Component;
