import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uei-4db6u.css';
import '../../css/u/u1hfyvlab.css';
import '../../css/w/w32_xebgv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uei-4db6u"/><path clip-rule="evenodd" class="u1hfyvlab"/><path class="w32_xebgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:openhands"} {...others} />);
}

export default Component;
