import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fcwlsyg8s.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="fcwlsyg8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:blister-pills-round-x16"} {...others} />);
}

export default Component;
