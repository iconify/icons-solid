import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xxtgcvb7y.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="xxtgcvb7y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:triangle-large"} {...others} />);
}

export default Component;
