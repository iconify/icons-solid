import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p23qu-5zj.css';
import '../../css/f/fg-2q4b9c.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="p23qu-5zj"/><path class="fg-2q4b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:go-mod"} {...others} />);
}

export default Component;
