import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1cyrmb8e.css';
import '../../css/m/mvssxhbia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g1cyrmb8e"/><path class="mvssxhbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pencil-writing-duotone"} {...others} />);
}

export default Component;
