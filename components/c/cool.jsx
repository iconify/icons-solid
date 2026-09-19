import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a36kvcc-u.css';
import '../../css/h/hm1y73b9m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a36kvcc-u"/><path class="hm1y73b9m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:cool"} {...others} />);
}

export default Component;
