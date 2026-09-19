import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tb9u9qcgo.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="tb9u9qcgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:building-circle-exclamation"} {...others} />);
}

export default Component;
