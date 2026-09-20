import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dhh-a4b7j.css';
import '../../css/y/yyzofeeqd.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="dhh-a4b7j"/><path class="yyzofeeqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:water-melon-solid"} {...others} />);
}

export default Component;
