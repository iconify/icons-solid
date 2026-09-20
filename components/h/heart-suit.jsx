import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/snp287xku.css';
import '../../css/l/lw_xbhbhf.css';
import '../../css/q/qo36bx88l.css';
import '../../css/x/xye16jy8d.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="snp287xku"/><path class="lw_xbhbhf"/><path class="qo36bx88l"/><path class="xye16jy8d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:heart-suit"} {...others} />);
}

export default Component;
