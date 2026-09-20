import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy1v-kflh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy1v-kflh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:baichuan"} {...others} />);
}

export default Component;
