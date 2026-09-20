import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfjry7otm.css';
import '../../css/g/gqkpe_bho.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vfjry7otm"/><path class="gqkpe_bho"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:log-in-16"} {...others} />);
}

export default Component;
