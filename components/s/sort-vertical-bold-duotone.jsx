import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl8qmubzh.css';
import '../../css/q/qwd-pmblu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl8qmubzh"/><path class="qwd-pmblu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sort-vertical-bold-duotone"} {...others} />);
}

export default Component;
