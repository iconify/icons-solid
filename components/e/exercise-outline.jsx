import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyp6cc8z.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="cuyp6cc8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:exercise-outline"} {...others} />);
}

export default Component;
