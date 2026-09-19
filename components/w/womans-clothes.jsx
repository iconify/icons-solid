import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uijxekb5x.css';
import '../../css/q/qc2z89dca.css';
import '../../css/c/cpvctcban.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="uijxekb5x"/><path class="qc2z89dca"/><path class="cpvctcban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:womans-clothes"} {...others} />);
}

export default Component;
