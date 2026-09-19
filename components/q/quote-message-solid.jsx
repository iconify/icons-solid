import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tf7qo0fud.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tf7qo0fud"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:quote-message-solid"} {...others} />);
}

export default Component;
