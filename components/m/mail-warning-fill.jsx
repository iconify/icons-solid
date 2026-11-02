import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbjpcgl1v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbjpcgl1v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:mail-warning-fill"} {...others} />);
}

export default Component;
