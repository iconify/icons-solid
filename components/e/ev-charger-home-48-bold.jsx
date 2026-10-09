import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsv5h1yxl.css';
import '../../css/r/r67i5vbwt.css';
import '../../css/f/f2v26bkcw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gsv5h1yxl"/><path class="r67i5vbwt"/><path class="f2v26bkcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ev-charger-home-48-bold"} {...others} />);
}

export default Component;
