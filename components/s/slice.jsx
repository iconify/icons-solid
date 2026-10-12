import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qztxuwbur.css';
import '../../css/q/q9jo5pbmy.css';
import '../../css/g/g2da-wk7l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qztxuwbur"/><path class="q9jo5pbmy"/><path class="g2da-wk7l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:slice"} {...others} />);
}

export default Component;
