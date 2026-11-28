import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fxq44iahj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fxq44iahj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:bookmark-plus"} {...others} />);
}

export default Component;
