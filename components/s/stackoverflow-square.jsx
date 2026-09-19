import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sga9agb4m.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="sga9agb4m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:stackoverflow-square"} {...others} />);
}

export default Component;
