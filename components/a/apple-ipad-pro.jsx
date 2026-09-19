import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vsfz5syxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vsfz5syxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:apple-ipad-pro"} {...others} />);
}

export default Component;
