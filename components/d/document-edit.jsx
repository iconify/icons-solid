import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6yqnk6da.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="h6yqnk6da"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:document-edit"} {...others} />);
}

export default Component;
