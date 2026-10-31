import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw-97iyer.css';
import '../../css/a/az4h9ufdp.css';
import '../../css/p/pc91ydrlr.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="rw-97iyer"/><path class="az4h9ufdp"/><path class="pc91ydrlr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:botswana"} {...others} />);
}

export default Component;
