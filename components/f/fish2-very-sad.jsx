import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sn7foxpmd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sn7foxpmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:fish2-very-sad"} {...others} />);
}

export default Component;
