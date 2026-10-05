import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfzm3g0mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gfzm3g0mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:navigation"} {...others} />);
}

export default Component;
