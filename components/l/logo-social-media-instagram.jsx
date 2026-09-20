import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1gllrzuq.css';
import '../../css/q/qh86mlter.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="t1gllrzuq"/><path class="qh86mlter"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-instagram"} {...others} />);
}

export default Component;
