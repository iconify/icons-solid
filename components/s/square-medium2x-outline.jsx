import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bsu2q7bdu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bsu2q7bdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:square-medium2x-outline"} {...others} />);
}

export default Component;
