import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/s/s3j7f6aop.css';
import '../../css/w/wg5m50buy.css';
import '../../css/t/tvuys3bkt.css';
import '../../css/r/rx371jblt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="s3j7f6aop"/><path class="wg5m50buy"/><path class="tvuys3bkt"/><path class="rx371jblt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:rss-symbol"} {...others} />);
}

export default Component;
