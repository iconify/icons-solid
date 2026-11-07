import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d_medy5gw.css';
import '../../css/w/wd_9hbcol.css';
import '../../css/w/woowbybcs.css';
import '../../css/w/wv0hdzbhs.css';
import '../../css/t/tv1xwfcle.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d_medy5gw"/><path class="wd_9hbcol"/><path class="woowbybcs"/><path class="wv0hdzbhs"/><path class="tv1xwfcle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-cross-bold"} {...others} />);
}

export default Component;
