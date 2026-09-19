import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/or0csdbgq.css';
import '../../css/j/jp7am0wid.css';
import '../../css/f/fuhyzz-oy.css';
import '../../css/n/n2lj_gbvl.css';
import '../../css/h/huxf9hb8w.css';
import '../../css/z/zeis9_42h.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="or0csdbgq"/><path class="jp7am0wid"/><path class="fuhyzz-oy"/><path class="n2lj_gbvl"/><path class="huxf9hb8w"/><path class="zeis9_42h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:game-die"} {...others} />);
}

export default Component;
