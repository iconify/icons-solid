import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gfrji3bgb.css';
import '../../css/i/ir-23urhq.css';
import '../../css/u/u3cr9i50k.css';
import '../../css/q/qw54yxxxh.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="gfrji3bgb"/><path clip-rule="evenodd" class="ir-23urhq"/><path clip-rule="evenodd" class="u3cr9i50k"/><path class="qw54yxxxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hamsa"} {...others} />);
}

export default Component;
