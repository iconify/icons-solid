import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdz8q2beh.css';

const viewBox = {"width":250,"height":250};
const content = `<path clip-rule="evenodd" class="gdz8q2beh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:plop"} {...others} />);
}

export default Component;
