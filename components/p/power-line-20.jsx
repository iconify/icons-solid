import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-mslvbxr.css';
import '../../css/s/sbemsbi8m.css';
import '../../css/k/kb7wbni7g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="y-mslvbxr"/><path class="sbemsbi8m"/><path class="kb7wbni7g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:power-line-20"} {...others} />);
}

export default Component;
