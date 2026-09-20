import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cy7r9nb-t.css';
import '../../css/g/gfq35jb6f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cy7r9nb-t"/><path class="gfq35jb6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:folder-favourite-bookmark-bold"} {...others} />);
}

export default Component;
