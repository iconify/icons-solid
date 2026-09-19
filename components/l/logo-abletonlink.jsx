import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m9ep0lbqw.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="m9ep0lbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-abletonlink"} {...others} />);
}

export default Component;
