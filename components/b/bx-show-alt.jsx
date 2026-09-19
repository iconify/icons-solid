import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6a2wrqkl.css';
import '../../css/f/f31x6qb0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m6a2wrqkl"/><path class="f31x6qb0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-show-alt"} {...others} />);
}

export default Component;
