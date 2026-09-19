import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4afgeb-d.css';
import '../../css/v/v1z4zvbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l4afgeb-d"/><path class="v1z4zvbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:calculator"} {...others} />);
}

export default Component;
