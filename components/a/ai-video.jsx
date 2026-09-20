import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z-jhzydsn.css';
import '../../css/t/t5jtssa3a.css';
import '../../css/s/s_df3qblw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="z-jhzydsn"/><path class="t5jtssa3a"/><path class="s_df3qblw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:ai-video"} {...others} />);
}

export default Component;
