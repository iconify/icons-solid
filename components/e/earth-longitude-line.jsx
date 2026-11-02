import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dy0sp0bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dy0sp0bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:earth-longitude-line"} {...others} />);
}

export default Component;
