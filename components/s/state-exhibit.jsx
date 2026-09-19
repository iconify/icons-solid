import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ijtpvlb4b.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ijtpvlb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:state-exhibit"} {...others} />);
}

export default Component;
