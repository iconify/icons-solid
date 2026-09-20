import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yavt7lb5r.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yavt7lb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:spherical-virus-with-exclamation-point"} {...others} />);
}

export default Component;
