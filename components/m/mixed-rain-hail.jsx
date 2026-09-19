import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7t-hgd4w.css';
import '../../css/r/ronlp2bmc.css';
import '../../css/t/twyxbjpff.css';
import '../../css/y/yrb5ix9ih.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="y7t-hgd4w"/><circle class="ronlp2bmc"/><path class="twyxbjpff"/><path class="yrb5ix9ih"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:mixed-rain-hail"} {...others} />);
}

export default Component;
