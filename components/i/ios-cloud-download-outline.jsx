import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a66vcju6v.css';
import '../../css/j/jb9r22v3l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a66vcju6v"/><path class="jb9r22v3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-cloud-download-outline"} {...others} />);
}

export default Component;
