import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bl912rbdb.css';
import '../../css/h/hduycmbms.css';
import '../../css/e/e84_jcm9v.css';
import '../../css/b/b3a0n5bzq.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="bl912rbdb"/><path class="hduycmbms"/><path class="e84_jcm9v"/><path class="b3a0n5bzq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:clapper-board"} {...others} />);
}

export default Component;
