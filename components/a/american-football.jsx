import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w3f0rzbgw.css';
import '../../css/d/d7iqucb8k.css';
import '../../css/r/r7ldvdbgu.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="w3f0rzbgw"/><path class="d7iqucb8k"/><path class="r7ldvdbgu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:american-football"} {...others} />);
}

export default Component;
