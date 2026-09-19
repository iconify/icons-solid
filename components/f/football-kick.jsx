import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tuxwwovsb.css';
import '../../css/b/b6hnulsaa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tuxwwovsb"/><path class="b6hnulsaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:football-kick"} {...others} />);
}

export default Component;
