import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qd63t2zpl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qd63t2zpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:notification-off"} {...others} />);
}

export default Component;
