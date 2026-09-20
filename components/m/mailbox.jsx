import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/et7729bnj.css';
import '../../css/b/bwh96ncgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="et7729bnj"/><path class="bwh96ncgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mailbox"} {...others} />);
}

export default Component;
