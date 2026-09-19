import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xm39c7bsf.css';

const viewBox = {"width":17,"height":24};
const content = `<path class="xm39c7bsf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:bitcoin"} {...others} />);
}

export default Component;
