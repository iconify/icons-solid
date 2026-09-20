import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/gz2w8aczl.css';
import '../../css/x/xfbzf_83e.css';
import '../../css/l/lwfontb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="gz2w8aczl"/><path class="xfbzf_83e"/><path class="lwfontb6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:livejournal-logo"} {...others} />);
}

export default Component;
