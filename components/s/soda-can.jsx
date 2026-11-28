import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rd9sr7hhe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rd9sr7hhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:soda-can"} {...others} />);
}

export default Component;
