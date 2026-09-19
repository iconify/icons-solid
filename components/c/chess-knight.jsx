import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi_zl8bpl.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="zi_zl8bpl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:chess-knight"} {...others} />);
}

export default Component;
