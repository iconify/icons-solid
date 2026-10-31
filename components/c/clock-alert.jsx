import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/m/m-n296otf.css';
import '../../css/a/ay3ercbfa.css';
import '../../css/o/oqi1c96sf.css';
import '../../css/c/cs0qu1nmp.css';
import '../../css/y/yfyya9d3f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="m-n296otf wm-shadow"/><path class="ay3ercbfa wm-shadow"/><path class="oqi1c96sf"/><path class="cs0qu1nmp"/><path class="wm-s yfyya9d3f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:clock-alert"} {...others} />);
}

export default Component;
