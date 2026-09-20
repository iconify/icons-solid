import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vuj0oo5gw.css';
import '../../css/v/vr9r2nw0d.css';
import '../../css/v/vllgg5aaa.css';
import '../../css/s/s50j-khsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vuj0oo5gw"/><path class="vr9r2nw0d"/><path class="vllgg5aaa"/><path class="s50j-khsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:sliders-v"} {...others} />);
}

export default Component;
