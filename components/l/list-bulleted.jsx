import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ygxyg7b8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ygxyg7b8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codex:list-bulleted"} {...others} />);
}

export default Component;
