import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ij_t_sbtf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ij_t_sbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:caret-left-solid"} {...others} />);
}

export default Component;
