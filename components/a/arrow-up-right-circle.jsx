import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag_fw_b7k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ag_fw_b7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:arrow-up-right-circle"} {...others} />);
}

export default Component;
