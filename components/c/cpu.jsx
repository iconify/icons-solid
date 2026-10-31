import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/c6qt82bof.css';
import '../../css/k/k7lu6pbtg.css';
import '../../css/s/s3lm7_wkp.css';
import '../../css/z/zgmpn70rp.css';
import '../../css/a/a8bxz5bjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="c6qt82bof wm-shadow"/><path class="k7lu6pbtg wm-shadow"/><path class="s3lm7_wkp"/><path class="zgmpn70rp"/><path class="a8bxz5bjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:cpu"} {...others} />);
}

export default Component;
