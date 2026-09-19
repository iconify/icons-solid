import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gcw1yj9nl.css';
import '../../css/o/okkvq7b7z.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="gcw1yj9nl"/><path class="okkvq7b7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cy"} {...others} />);
}

export default Component;
