import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbsst6bep.css';
import '../../css/h/h7gro1emj.css';
import '../../css/r/r3sjlmblr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="xbsst6bep"/><path class="h7gro1emj"/><path class="r3sjlmblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:coin"} {...others} />);
}

export default Component;
