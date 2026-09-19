import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2e2c-bxm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e2e2c-bxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:kusto-alt"} {...others} />);
}

export default Component;
