import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n550um41m.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="n550um41m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:one-handed-holding-tablet-handheld-solid"} {...others} />);
}

export default Component;
