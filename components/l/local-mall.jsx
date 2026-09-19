import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea8c8v_1d.css';

const viewBox = {"width":384,"height":456};
const content = `<path class="ea8c8v_1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zmdi:local-mall"} {...others} />);
}

export default Component;
