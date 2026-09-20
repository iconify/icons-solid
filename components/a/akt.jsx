import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya0lp56gz.css';
import '../../css/c/ch8mp5-hu.css';
import '../../css/s/sopvr-3ry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ya0lp56gz"/><path class="ch8mp5-hu"/><path class="sopvr-3ry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:akt"} {...others} />);
}

export default Component;
