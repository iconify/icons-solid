import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1qupzz3x.css';
import '../../css/t/tc13xdone.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1qupzz3x"/><path class="tc13xdone"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:chevrons-up-filled"} {...others} />);
}

export default Component;
