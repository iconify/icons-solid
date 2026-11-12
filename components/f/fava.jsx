import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yktm7h6-w.css';
import '../../css/j/jyold6wus.css';
import '../../css/b/b671z779q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yktm7h6-w"/><path class="jyold6wus"/><path class="b671z779q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:fava"} {...others} />);
}

export default Component;
