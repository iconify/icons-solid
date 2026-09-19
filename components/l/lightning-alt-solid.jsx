import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zt2dw8m3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zt2dw8m3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:lightning-alt-solid"} {...others} />);
}

export default Component;
