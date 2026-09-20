import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vmx0tgbbf.css';
import '../../css/m/mxx-s1b4w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vmx0tgbbf"/><path class="mxx-s1b4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:lym"} {...others} />);
}

export default Component;
