import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bxh-jdb5w.css';
import '../../css/v/vi04yvb6a.css';
import '../../css/d/d-u2_-1yy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bxh-jdb5w"/><path class="vi04yvb6a"/><path class="d-u2_-1yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:pagination-alt"} {...others} />);
}

export default Component;
