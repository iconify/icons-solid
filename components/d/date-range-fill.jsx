import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uyl-ddcwz.css';
import '../../css/f/f2woerb5f.css';
import '../../css/e/e4ii85bpa.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uyl-ddcwz"/><path clip-rule="evenodd" class="f2woerb5f"/><path class="e4ii85bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:date-range-fill"} {...others} />);
}

export default Component;
