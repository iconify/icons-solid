import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x42f5accj.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="x42f5accj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:expand-arrow-1"} {...others} />);
}

export default Component;
