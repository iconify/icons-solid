import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abo0go4gu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="abo0go4gu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:bracket-dot"} {...others} />);
}

export default Component;
