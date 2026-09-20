import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6gk6tkiy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="e6gk6tkiy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:fragile-solid"} {...others} />);
}

export default Component;
