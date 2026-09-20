import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8o7tqwml.css';
import '../../css/d/d-cv43blx.css';
import '../../css/e/et53a2b1s.css';
import '../../css/m/mxgqkob2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n8o7tqwml"/><path clip-rule="evenodd" class="d-cv43blx"/><path class="et53a2b1s"/><path class="mxgqkob2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cbx"} {...others} />);
}

export default Component;
