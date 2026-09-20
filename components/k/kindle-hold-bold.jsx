import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r84escbrd.css';
import '../../css/q/qffwwpzrz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r84escbrd"/><path class="qffwwpzrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:kindle-hold-bold"} {...others} />);
}

export default Component;
