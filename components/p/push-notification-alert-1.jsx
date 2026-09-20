import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2ugmubyk.css';
import '../../css/c/cuvwpsbya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2ugmubyk"/><path class="cuvwpsbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:push-notification-alert-1"} {...others} />);
}

export default Component;
