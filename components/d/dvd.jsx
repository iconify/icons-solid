import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uk9v8kbfn.css';
import '../../css/v/v2szjrygp.css';
import '../../css/t/tzko94lia.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="uk9v8kbfn"/><path class="v2szjrygp"/><path class="tzko94lia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:dvd"} {...others} />);
}

export default Component;
