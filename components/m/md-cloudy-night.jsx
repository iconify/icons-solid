import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4xyx_bsy.css';
import '../../css/o/o-00tsbmu.css';
import '../../css/k/kr677l0as.css';
import '../../css/a/arqavzbum.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="p4xyx_bsy"/><path class="o-00tsbmu"/><path class="kr677l0as"/><path class="arqavzbum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-cloudy-night"} {...others} />);
}

export default Component;
