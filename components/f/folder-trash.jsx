import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ajw-j-mwd.css';
import '../../css/j/jqfr0dnja.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ajw-j-mwd"/><path class="jqfr0dnja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-trash"} {...others} />);
}

export default Component;
