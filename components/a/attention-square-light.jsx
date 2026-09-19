import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/p/pgoy4ib5g.css';
import '../../css/t/tvgcsmq7b.css';
import '../../css/y/ymlfz7e-n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="pgoy4ib5g"/><path class="tvgcsmq7b"/><path class="ymlfz7e-n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:attention-square-light"} {...others} />);
}

export default Component;
