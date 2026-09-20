import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfao2sbcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfao2sbcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:three-octagon-solid"} {...others} />);
}

export default Component;
