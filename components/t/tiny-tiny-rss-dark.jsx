import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ad91pccmh.css';
import '../../css/u/uq4weob1t.css';
import '../../css/a/a2trefbuk.css';
import '../../css/c/cf670p61w.css';

const viewBox = {"width":512,"height":512};
const content = `<circle transform="rotate(-89.685 70.225 441.78)" class="ad91pccmh"/><path class="uq4weob1t"/><path class="a2trefbuk"/><path class="cf670p61w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiny-tiny-rss-dark"} {...others} />);
}

export default Component;
