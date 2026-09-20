import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u34x-cb8m.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="u34x-cb8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:doityourself-14"} {...others} />);
}

export default Component;
