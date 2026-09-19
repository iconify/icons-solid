import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_7ttr2sn.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="b_7ttr2sn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:translate-greek-latin"} {...others} />);
}

export default Component;
