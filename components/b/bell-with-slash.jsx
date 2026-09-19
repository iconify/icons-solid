import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q_aeo3bes.css';
import '../../css/h/h9q6cw2rm.css';
import '../../css/b/bnoq2abfn.css';
import '../../css/m/m9h5tppbe.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="q_aeo3bes"/><path class="h9q6cw2rm"/><path class="bnoq2abfn"/><path class="m9h5tppbe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:bell-with-slash"} {...others} />);
}

export default Component;
