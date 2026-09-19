import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vvu7ot9vn.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="vvu7ot9vn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:cloud-up"} {...others} />);
}

export default Component;
