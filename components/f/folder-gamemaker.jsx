import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l47nr7bbh.css';
import '../../css/j/j3d0l-bhg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="l47nr7bbh"/><path class="j3d0l-bhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-gamemaker"} {...others} />);
}

export default Component;
