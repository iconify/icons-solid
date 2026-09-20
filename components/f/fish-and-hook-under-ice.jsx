import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l9mpb1lqs.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="l9mpb1lqs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:fish-and-hook-under-ice"} {...others} />);
}

export default Component;
