import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xg8exbb1t.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="xg8exbb1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:amazon"} {...others} />);
}

export default Component;
