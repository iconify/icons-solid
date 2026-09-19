import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cwx4bplfu.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="cwx4bplfu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hematology"} {...others} />);
}

export default Component;
