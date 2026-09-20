import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t40y_0hxm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t40y_0hxm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:arrow-down-expressive"} {...others} />);
}

export default Component;
