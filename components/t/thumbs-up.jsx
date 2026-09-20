import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8wq1obhk.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="o8wq1obhk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:thumbs-up"} {...others} />);
}

export default Component;
