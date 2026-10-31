import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yy7m5dbrn.css';
import '../../css/e/e47sjs74x.css';
import '../../css/g/g72mfb4-p.css';
import '../../css/m/m7atqbckd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow yy7m5dbrn"/><path class="e47sjs74x wm-shadow"/><path class="g72mfb4-p"/><path class="m7atqbckd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:close"} {...others} />);
}

export default Component;
