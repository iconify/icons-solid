import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/il9th5ojt.css';
import '../../css/r/rugwk7w_z.css';
import '../../css/d/dxowqhmnt.css';
import '../../css/o/ock1fkssf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="il9th5ojt"/><path class="rugwk7w_z"/><path class="dxowqhmnt"/><path class="ock1fkssf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:skunk"} {...others} />);
}

export default Component;
