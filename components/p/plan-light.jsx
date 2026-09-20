import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hj80bmbzo.css';
import '../../css/s/s4vpxwbln.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hj80bmbzo"/><path class="s4vpxwbln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:plan-light"} {...others} />);
}

export default Component;
