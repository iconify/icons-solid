import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xwtz1c_6i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="xwtz1c_6i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:ppe-gown2x-outline"} {...others} />);
}

export default Component;
