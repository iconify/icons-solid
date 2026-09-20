import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zy5nm_b4s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zy5nm_b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:stop-slash"} {...others} />);
}

export default Component;
