import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zgx5tmbnx.css';

const viewBox = {"width":29,"height":24};
const content = `<path class="zgx5tmbnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:columns"} {...others} />);
}

export default Component;
