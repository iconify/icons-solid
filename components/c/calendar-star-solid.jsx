import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csgxesbgh.css';
import '../../css/c/ctzgkpf1i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="csgxesbgh"/><path class="ctzgkpf1i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:calendar-star-solid"} {...others} />);
}

export default Component;
