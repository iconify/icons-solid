import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/u/u80whvb_f.css';
import '../../css/q/qjr1g9uki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="u80whvb_f"/><path class="qjr1g9uki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:bnter-logo"} {...others} />);
}

export default Component;
