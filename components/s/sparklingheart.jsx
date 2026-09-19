import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ndjmpsjgu.css';
import '../../css/e/est9gvb6j.css';
import '../../css/h/hbc_irb5l.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ndjmpsjgu"/><path class="est9gvb6j"/><path class="hbc_irb5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:sparklingheart"} {...others} />);
}

export default Component;
