import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nj2h62b3c.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="nj2h62b3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:poison"} {...others} />);
}

export default Component;
