import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2tyxabja.css';
import '../../css/q/q28ylgzwl.css';
import '../../css/r/rquqylgys.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="d2tyxabja"/><path class="q28ylgzwl"/><path class="rquqylgys"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:copy-paste-clipboard"} {...others} />);
}

export default Component;
