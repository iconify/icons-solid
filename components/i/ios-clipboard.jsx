import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pxeuqzmsn.css';
import '../../css/z/z1--w73xm.css';
import '../../css/q/q3c4j-bql.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pxeuqzmsn"/><path class="z1--w73xm"/><path class="q3c4j-bql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-clipboard"} {...others} />);
}

export default Component;
