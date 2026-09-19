import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ltikhp55e.css';
import '../../css/i/i4nkalbtd.css';
import '../../css/u/uykw5abjm.css';
import '../../css/g/gfprm-lkz.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ltikhp55e"/><path class="i4nkalbtd"/><path class="uykw5abjm"/><path class="gfprm-lkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:apify-wordmark"} {...others} />);
}

export default Component;
