import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vn937z2kt.css';
import '../../css/a/afhlj5qgy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vn937z2kt"/><path class="afhlj5qgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:treasure-chest-solid"} {...others} />);
}

export default Component;
