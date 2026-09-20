import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/weyrflzob.css';
import '../../css/y/y34np8hsx.css';
import '../../css/b/bhkz1qbpx.css';
import '../../css/q/qjmfgenot.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="weyrflzob"/><path class="y34np8hsx"/><path class="bhkz1qbpx"/><path class="qjmfgenot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:image-highlights"} {...others} />);
}

export default Component;
