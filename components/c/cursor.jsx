import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/h/hp-f7n9ml.css';
import '../../css/v/vdobf5dnk.css';
import '../../css/d/d-x4hkpdv.css';
import '../../css/n/n4w1awbdf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="hp-f7n9ml wm-shadow"/><path class="vdobf5dnk wm-shadow"/><path class="d-x4hkpdv"/><path class="n4w1awbdf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cursor"} {...others} />);
}

export default Component;
