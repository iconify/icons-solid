import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u64rmvb8r.css';
import '../../css/h/hhhxw4j6n.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u64rmvb8r"/><path class="hhhxw4j6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-storybook"} {...others} />);
}

export default Component;
