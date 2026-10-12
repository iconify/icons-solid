import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/avf15zb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="avf15zb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:vr"} {...others} />);
}

export default Component;
