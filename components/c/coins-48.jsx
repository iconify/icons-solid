import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wqf7b7ozo.css';
import '../../css/x/xa5rde75k.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wqf7b7ozo"/><path class="xa5rde75k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coins-48"} {...others} />);
}

export default Component;
