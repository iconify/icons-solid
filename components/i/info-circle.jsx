import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xud0d_adg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xud0d_adg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:info-circle"} {...others} />);
}

export default Component;
