import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t86dq8b9i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="t86dq8b9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-oval-x16"} {...others} />);
}

export default Component;
