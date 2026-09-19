import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4x3cd_oo.css';

const viewBox = {"width":368,"height":472};
const content = `<path class="a4x3cd_oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:wb-iridescent"} {...others} />);
}

export default Component;
