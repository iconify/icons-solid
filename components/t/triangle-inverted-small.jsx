import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su52d4bzc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="su52d4bzc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:triangle-inverted-small"} {...others} />);
}

export default Component;
