import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o45hcwbiq.css';
import '../../css/u/uzkx0rksu.css';
import '../../css/q/qra4v06lc.css';
import '../../css/e/ecihrq6mt.css';
import '../../css/i/itikrg95t.css';
import '../../css/s/sl-ihibsr.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="o45hcwbiq"/><path class="uzkx0rksu"/><path class="qra4v06lc"/><path class="ecihrq6mt"/><path class="itikrg95t"/><path class="sl-ihibsr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:chicken"} {...others} />);
}

export default Component;
