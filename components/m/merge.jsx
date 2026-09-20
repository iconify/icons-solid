import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qef9l7bhw.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="qef9l7bhw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:merge"} {...others} />);
}

export default Component;
