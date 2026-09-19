import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x84j69sji.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x84j69sji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:notification-minus"} {...others} />);
}

export default Component;
