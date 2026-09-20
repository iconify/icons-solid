import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h0hoxwb5h.css';
import '../../css/f/flaqzebkm.css';
import '../../css/b/bl13z8bbg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h0hoxwb5h"/><path class="flaqzebkm"/><path class="bl13z8bbg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:controls-pause"} {...others} />);
}

export default Component;
