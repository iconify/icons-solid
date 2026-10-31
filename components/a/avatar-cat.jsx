import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vdyk84bdd.css';
import '../../css/q/qbmxxsbra.css';
import '../../css/r/ryjqceb3q.css';
import '../../css/q/qbzlvdb3n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vdyk84bdd wm-shadow"/><path class="qbmxxsbra wm-shadow"/><path class="ryjqceb3q"/><path class="qbzlvdb3n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:avatar-cat"} {...others} />);
}

export default Component;
