import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/himehxbog.css';
import '../../css/p/prj3bzzpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="himehxbog"/><path class="prj3bzzpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:volume-full"} {...others} />);
}

export default Component;
