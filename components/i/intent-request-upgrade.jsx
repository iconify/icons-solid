import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tnecdetti.css';
import '../../css/a/arfms3bcp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tnecdetti"/><path class="arfms3bcp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:intent-request-upgrade"} {...others} />);
}

export default Component;
