import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a4c8pd5le.css';
import '../../css/c/clgeaqb1x.css';
import '../../css/y/yq8uffbya.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a4c8pd5le"/><path class="clgeaqb1x"/><path class="yq8uffbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:logo-web-component"} {...others} />);
}

export default Component;
