import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eg76_7bbe.css';
import '../../css/m/m0b8pab-h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-primary-layer eg76_7bbe"/><path class="duoicon-secondary-layer m0b8pab-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:toggle"} {...others} />);
}

export default Component;
