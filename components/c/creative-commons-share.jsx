import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xj_6xpl-q.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="xj_6xpl-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:creative-commons-share"} {...others} />);
}

export default Component;
