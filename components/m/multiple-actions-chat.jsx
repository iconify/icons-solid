import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tx7nithiv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tx7nithiv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:multiple-actions-chat"} {...others} />);
}

export default Component;
