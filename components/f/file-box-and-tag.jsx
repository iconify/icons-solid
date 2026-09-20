import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbf9zkbix.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rbf9zkbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:file-box-and-tag"} {...others} />);
}

export default Component;
