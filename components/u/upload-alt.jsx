import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ybqkib0xe.css';
import '../../css/t/t9chy47bb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ybqkib0xe"/><path class="t9chy47bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:upload-alt"} {...others} />);
}

export default Component;
