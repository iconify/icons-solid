import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/bpx-n0b8v.css';
import '../../css/o/obtqwbbvb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="bpx-n0b8v"/><path class="obtqwbbvb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-xd-logo"} {...others} />);
}

export default Component;
