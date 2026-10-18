import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sc9itcbez.css';
import '../../css/d/d_av7khvm.css';
import '../../css/y/ymo2yhixw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sc9itcbez"/><path class="d_av7khvm"/><path class="ymo2yhixw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cybersecurity-20"} {...others} />);
}

export default Component;
