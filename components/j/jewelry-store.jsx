import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4-2dczzv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u4-2dczzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:jewelry-store"} {...others} />);
}

export default Component;
