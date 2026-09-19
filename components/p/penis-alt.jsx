import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be7cf6b4i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="be7cf6b4i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:penis-alt"} {...others} />);
}

export default Component;
