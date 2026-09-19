import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qw0njuuzd.css';
import '../../css/r/rssdfuhft.css';
import '../../css/y/ywin52edh.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="qw0njuuzd"/><path class="rssdfuhft"/><path class="ywin52edh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:doctrine-wordmark"} {...others} />);
}

export default Component;
