import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nsmli1cfn.css';
import '../../css/x/xfegddcoa.css';
import '../../css/u/u5r3t04hl.css';
import '../../css/b/berg0zbjr.css';
import '../../css/f/f49rs-fos.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="nsmli1cfn"/><path class="xfegddcoa"/><path class="u5r3t04hl"/><path class="berg0zbjr"/><path class="f49rs-fos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tiny-tiny-rss"} {...others} />);
}

export default Component;
