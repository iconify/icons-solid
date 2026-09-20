import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iefwlelij.css';
import '../../css/h/h7exl5bwx.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iefwlelij"/><path class="h7exl5bwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:social-rewards-like-circle"} {...others} />);
}

export default Component;
