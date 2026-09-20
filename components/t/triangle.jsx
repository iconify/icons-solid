import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zri1lgb0k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zri1lgb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:triangle"} {...others} />);
}

export default Component;
