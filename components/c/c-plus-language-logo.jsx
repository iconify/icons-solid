import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fjyrngqjx.css';
import '../../css/s/s32lnlb2k.css';
import '../../css/d/dal7xwb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="fjyrngqjx"/><path class="s32lnlb2k"/><path class="dal7xwb5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:c-plus-language-logo"} {...others} />);
}

export default Component;
