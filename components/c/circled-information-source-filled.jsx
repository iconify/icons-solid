import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bk5j4gb-p.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="bk5j4gb-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:circled-information-source-filled"} {...others} />);
}

export default Component;
