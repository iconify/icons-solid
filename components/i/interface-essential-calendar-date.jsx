import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvc4pqvny.css';
import '../../css/k/kmd5mubrg.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="qvc4pqvny"/><path class="kmd5mubrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-calendar-date"} {...others} />);
}

export default Component;
