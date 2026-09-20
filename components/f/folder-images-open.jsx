import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jzicu7o9n.css';
import '../../css/o/o962okb9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jzicu7o9n"/><path class="o962okb9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-images-open"} {...others} />);
}

export default Component;
