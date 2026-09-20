import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y449jb5ie.css';

const viewBox = {"width":29.574,"height":7.976};
const content = `<path class="y449jb5ie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pluto-tv"} {...others} />);
}

export default Component;
