import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqs0eobgx.css';
import '../../css/e/ejw3spdse.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="sqs0eobgx"/><path class="ejw3spdse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:arrow-down-left-20"} {...others} />);
}

export default Component;
