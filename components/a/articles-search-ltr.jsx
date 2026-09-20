import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q1___qv1l.css';
import '../../css/l/lsxdb1s3e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q1___qv1l"/><path class="lsxdb1s3e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:articles-search-ltr"} {...others} />);
}

export default Component;
