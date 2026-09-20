import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vp2-90bsy.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="vp2-90bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:alien-solid"} {...others} />);
}

export default Component;
