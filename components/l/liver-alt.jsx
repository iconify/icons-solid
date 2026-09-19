import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v8i7obbah.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v8i7obbah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:liver-alt"} {...others} />);
}

export default Component;
