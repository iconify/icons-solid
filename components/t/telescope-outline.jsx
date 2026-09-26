import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un9hywbsg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="un9hywbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:telescope-outline"} {...others} />);
}

export default Component;
