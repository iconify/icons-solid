import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do1g0fkgq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="do1g0fkgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:microsoft-word"} {...others} />);
}

export default Component;
