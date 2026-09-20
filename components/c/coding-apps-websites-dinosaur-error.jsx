import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fb66y-qhg.css';
import '../../css/k/kxh3svikf.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fb66y-qhg"/><path class="kxh3svikf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:coding-apps-websites-dinosaur-error"} {...others} />);
}

export default Component;
