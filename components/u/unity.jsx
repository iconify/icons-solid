import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/goem8ebtm.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="goem8ebtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:unity"} {...others} />);
}

export default Component;
