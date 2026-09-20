import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jjsut2bzf.css';
import '../../css/x/x8-n8yhcy.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jjsut2bzf"/><path class="x8-n8yhcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:logo-social-media-youtube"} {...others} />);
}

export default Component;
