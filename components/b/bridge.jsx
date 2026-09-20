import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg1xxrm6j.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="mg1xxrm6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:bridge"} {...others} />);
}

export default Component;
