import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w06-b1bij.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="w06-b1bij"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"entypo:uninstall"} {...others} />);
}

export default Component;
