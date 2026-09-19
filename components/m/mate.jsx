import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/djuf0b3ka.css';
import '../../css/a/afxo_ccff.css';
import '../../css/v/v6s_irb5r.css';
import '../../css/b/b4zb3ubog.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="djuf0b3ka"/><path class="afxo_ccff"/><path class="v6s_irb5r"/><path class="b4zb3ubog"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:mate"} {...others} />);
}

export default Component;
