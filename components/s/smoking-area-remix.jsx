import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jk989y3dj.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="jk989y3dj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:smoking-area-remix"} {...others} />);
}

export default Component;
