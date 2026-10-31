import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/b/boszwjbxa.css';
import '../../css/n/nhc1pccmv.css';
import '../../css/z/z4s2yxb2y.css';
import '../../css/s/sri1cjhdk.css';
import '../../css/u/umy0o1b0k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="boszwjbxa wm-shadow"/><path class="nhc1pccmv"/><path class="z4s2yxb2y"/><path class="sri1cjhdk"/><path class="umy0o1b0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:address-book"} {...others} />);
}

export default Component;
