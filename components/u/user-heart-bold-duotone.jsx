import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmxa02b4w.css';
import '../../css/t/tllmdybix.css';
import '../../css/o/ojkge583k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xmxa02b4w"/><path class="tllmdybix"/><path class="ojkge583k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-heart-bold-duotone"} {...others} />);
}

export default Component;
