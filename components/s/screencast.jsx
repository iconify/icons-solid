import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r1f_1jb5g.css';
import '../../css/f/f0zhtgbge.css';
import '../../css/b/bjn1hk75c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="r1f_1jb5g"/><path class="f0zhtgbge"/><path class="bjn1hk75c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:screencast"} {...others} />);
}

export default Component;
