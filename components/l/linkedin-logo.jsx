import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/l/l1flu1iiu.css';
import '../../css/o/oj0g7vb_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="l1flu1iiu"/><path clip-rule="evenodd" class="oj0g7vb_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:linkedin-logo"} {...others} />);
}

export default Component;
