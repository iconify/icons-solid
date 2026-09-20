import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dak6y7b8m.css';
import '../../css/z/zjptowt2p.css';
import '../../css/r/rtotpcckl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dak6y7b8m"/><path clip-rule="evenodd" class="zjptowt2p"/><path clip-rule="evenodd" class="rtotpcckl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:qr-code-duotone"} {...others} />);
}

export default Component;
