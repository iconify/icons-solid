import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyjz5_xhd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iyjz5_xhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icons8:cancel"} {...others} />);
}

export default Component;
