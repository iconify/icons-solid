import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agxpz7u6h.css';
import '../../css/u/unfowsxse.css';
import '../../css/v/vw6a_0v9g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agxpz7u6h"/><path class="unfowsxse"/><path class="vw6a_0v9g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:bookmarks-document"} {...others} />);
}

export default Component;
