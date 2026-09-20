import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz4v91hwj.css';
import '../../css/l/lhr648d7s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="gz4v91hwj"/><path class="lhr648d7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cursor-light"} {...others} />);
}

export default Component;
