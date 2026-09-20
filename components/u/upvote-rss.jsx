import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsxq07p-s.css';
import '../../css/s/s8mi_dboe.css';
import '../../css/g/gt-pqrb5j.css';
import '../../css/x/xwbx9bsrs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tsxq07p-s"/><path class="s8mi_dboe"/><path class="gt-pqrb5j"/><path class="xwbx9bsrs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:upvote-rss"} {...others} />);
}

export default Component;
