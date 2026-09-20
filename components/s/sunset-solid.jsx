import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqj9iy2ft.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qqj9iy2ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:sunset-solid"} {...others} />);
}

export default Component;
