import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j09ca0beg.css';
import '../../css/w/wvaqmlbju.css';
import '../../css/l/lwz-57brl.css';
import '../../css/z/zvya3gbrq.css';
import '../../css/l/lp248ibxx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="j09ca0beg"/><path class="wvaqmlbju"/><path class="lwz-57brl"/><path class="zvya3gbrq"/><path class="lp248ibxx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:cloud-1"} {...others} />);
}

export default Component;
