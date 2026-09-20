import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-t15ibmv.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="d-t15ibmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:arrow-bottom-left-circle"} {...others} />);
}

export default Component;
