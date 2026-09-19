import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bao1vbqnc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bao1vbqnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:christmas-tree-one"} {...others} />);
}

export default Component;
