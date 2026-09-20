import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/ko6o-6b9b.css';
import '../../css/f/ftf5x2bie.css';
import '../../css/r/rcpuhpb4g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ko6o-6b9b"/><path class="ftf5x2bie"/><path class="rcpuhpb4g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:global-broken"} {...others} />);
}

export default Component;
