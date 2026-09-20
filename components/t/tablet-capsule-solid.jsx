import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wb0rf9e8q.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wb0rf9e8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:tablet-capsule-solid"} {...others} />);
}

export default Component;
