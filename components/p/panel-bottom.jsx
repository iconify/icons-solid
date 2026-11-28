import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yqpl0teuj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yqpl0teuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:panel-bottom"} {...others} />);
}

export default Component;
