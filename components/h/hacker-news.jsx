import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a42oku2cl.css';
import '../../css/y/ytr1p0b3u.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a42oku2cl"/><path class="ytr1p0b3u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:hacker-news"} {...others} />);
}

export default Component;
