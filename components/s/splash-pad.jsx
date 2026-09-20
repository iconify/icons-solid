import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2d4ilbfy.css';
import '../../css/s/s86v9c0wr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="p2d4ilbfy"/><path class="s86v9c0wr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:splash-pad"} {...others} />);
}

export default Component;
