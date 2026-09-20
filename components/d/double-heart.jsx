import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/a/a3h5v9byo.css';
import '../../css/n/n9h_n5b2p.css';
import '../../css/s/svv3xwbfg.css';
import '../../css/t/tw___5ryy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="a3h5v9byo"/><path clip-rule="evenodd" class="n9h_n5b2p"/><path class="svv3xwbfg"/><path class="tw___5ryy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:double-heart"} {...others} />);
}

export default Component;
