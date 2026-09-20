import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bmevz-btj.css';
import '../../css/o/oynab6bpl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bmevz-btj"/><path class="oynab6bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:roblox"} {...others} />);
}

export default Component;
