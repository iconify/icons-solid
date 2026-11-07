import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7ajkhrwp.css';
import '../../css/z/zb6pr8b2k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y7ajkhrwp"/><path class="zb6pr8b2k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-sun-bold"} {...others} />);
}

export default Component;
