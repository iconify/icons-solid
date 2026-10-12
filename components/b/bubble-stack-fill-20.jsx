import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzk3ruo3u.css';
import '../../css/y/ybw6xbfmb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rzk3ruo3u"/><path class="ybw6xbfmb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:bubble-stack-fill-20"} {...others} />);
}

export default Component;
