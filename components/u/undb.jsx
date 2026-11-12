import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pthh6ojyi.css';
import '../../css/v/vjphkobps.css';
import '../../css/z/ztgnliu0b.css';
import '../../css/i/ibu718bja.css';
import '../../css/l/lhx1jjn7h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pthh6ojyi"/><path class="vjphkobps"/><path class="ztgnliu0b"/><path class="ibu718bja"/><path class="lhx1jjn7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:undb"} {...others} />);
}

export default Component;
