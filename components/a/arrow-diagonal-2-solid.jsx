import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cpffbdjyt.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cpffbdjyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:arrow-diagonal-2-solid"} {...others} />);
}

export default Component;
