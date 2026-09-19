import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nzk5mpk7z.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="nzk5mpk7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:attach-compact"} {...others} />);
}

export default Component;
