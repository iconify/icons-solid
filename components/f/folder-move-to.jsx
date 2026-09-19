import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/li9q4lu4g.css';
import '../../css/r/rvbsrrkcs.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="li9q4lu4g"/><path class="rvbsrrkcs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:folder-move-to"} {...others} />);
}

export default Component;
