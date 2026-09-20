import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0djsxb9c.css';
import '../../css/d/dplt1qi1x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z0djsxb9c"/><path class="dplt1qi1x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-include-open"} {...others} />);
}

export default Component;
