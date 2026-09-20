import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3j6brbtp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b3j6brbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:corner-up-right-duotone"} {...others} />);
}

export default Component;
