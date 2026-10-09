import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv4lesbfb.css';
import '../../css/g/grzy5p8dw.css';
import '../../css/z/zz1xf7bjf.css';
import '../../css/t/tnr26c-cc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vv4lesbfb"/><path class="grzy5p8dw"/><path class="zz1xf7bjf"/><path class="tnr26c-cc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:motorcycle-20"} {...others} />);
}

export default Component;
