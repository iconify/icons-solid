import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2lfpzbfh.css';
import '../../css/d/d5vledc_g.css';
import '../../css/o/o6nm72myp.css';
import '../../css/k/knv03ac5w.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="d2lfpzbfh"/><path class="d5vledc_g"/><path class="o6nm72myp"/><circle class="knv03ac5w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ribbon-outline"} {...others} />);
}

export default Component;
