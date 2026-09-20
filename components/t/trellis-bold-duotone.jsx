import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4-mns66q.css';
import '../../css/c/c52keb9qe.css';
import '../../css/x/x8znsxq4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4-mns66q"/><path class="c52keb9qe"/><path clip-rule="evenodd" class="x8znsxq4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:trellis-bold-duotone"} {...others} />);
}

export default Component;
