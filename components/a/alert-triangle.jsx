import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b3w0adc3y.css';
import '../../css/h/hh62rlb-m.css';
import '../../css/d/dqvt27bhn.css';
import '../../css/h/hlaue6blu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b3w0adc3y wm-shadow"/><path class="hh62rlb-m wm-shadow"/><path class="dqvt27bhn"/><path class="hlaue6blu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:alert-triangle"} {...others} />);
}

export default Component;
