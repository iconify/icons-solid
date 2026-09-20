import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ywimt5b1o.css';
import '../../css/c/cyo4yw9bp.css';
import '../../css/w/wv2mlgdyl.css';
import '../../css/n/niphly_2u.css';

const viewBox = {"width":300,"height":300};
const content = `<path class="ywimt5b1o"/><path class="cyo4yw9bp"/><path class="wv2mlgdyl"/><path class="niphly_2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:restql"} {...others} />);
}

export default Component;
