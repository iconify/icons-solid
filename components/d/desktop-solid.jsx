import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n100ldbyg.css';
import '../../css/g/gzw5n1b6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n100ldbyg"/><path class="gzw5n1b6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:desktop-solid"} {...others} />);
}

export default Component;
