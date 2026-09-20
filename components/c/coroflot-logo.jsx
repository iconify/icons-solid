import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/g/ges38-b3z.css';
import '../../css/h/hfuto-b7o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="ges38-b3z"/><path clip-rule="evenodd" class="hfuto-b7o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:coroflot-logo"} {...others} />);
}

export default Component;
