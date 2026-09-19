import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sl06tlnfl.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="sl06tlnfl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:contraceptive-patch"} {...others} />);
}

export default Component;
