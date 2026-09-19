import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mrh349bcs.css';
import '../../css/c/c2bq88bha.css';
import '../../css/w/wvhah5bpm.css';
import '../../css/d/dq74t8zzp.css';
import '../../css/j/jlk9hcnld.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="mrh349bcs"/><path class="c2bq88bha"/><path class="wvhah5bpm"/><path class="dq74t8zzp"/><path class="jlk9hcnld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:dagger"} {...others} />);
}

export default Component;
