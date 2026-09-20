import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nh6wr9bwb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nh6wr9bwb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:aas-shell-check-ok-filled"} {...others} />);
}

export default Component;
