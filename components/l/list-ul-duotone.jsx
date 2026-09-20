import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mjx1jgzfs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mjx1jgzfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:list-ul-duotone"} {...others} />);
}

export default Component;
