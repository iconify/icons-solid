import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w16t2pppu.css';
import '../../css/q/q9-pcgbxd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w16t2pppu"/><path class="q9-pcgbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:home"} {...others} />);
}

export default Component;
