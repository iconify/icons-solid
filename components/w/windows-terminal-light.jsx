import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj9b7k8db.css';
import '../../css/y/ym98bkbma.css';
import '../../css/y/yy5qrkvzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jj9b7k8db"/><path class="ym98bkbma"/><path class="yy5qrkvzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:windows-terminal-light"} {...others} />);
}

export default Component;
