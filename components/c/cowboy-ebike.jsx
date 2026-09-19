import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luh-ytb6v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="luh-ytb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:cowboy-ebike"} {...others} />);
}

export default Component;
