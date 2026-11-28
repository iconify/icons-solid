import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f40ypprxb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f40ypprxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:robot-vacuum-check"} {...others} />);
}

export default Component;
